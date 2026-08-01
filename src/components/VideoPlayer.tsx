import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Only one video may play across the whole site. */
const registry = new Set<HTMLVideoElement>();
function soloPlay(el: HTMLVideoElement) {
  registry.forEach((other) => {
    if (other !== el && !other.paused) {
      other.pause();
      other.muted = true;
    }
  });
}

export function VideoPlayer({
  src,
  poster,
  className,
  aspect = "aspect-[9/16]",
  rounded = "rounded-[1.35rem]",
}: {
  src: string;
  poster?: string;
  className?: string;
  aspect?: string;
  rounded?: string;
}) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [seekHint, setSeekHint] = useState<"back" | "forward" | null>(null);
  const wasPlaying = useRef(false);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    registry.add(el);
    return () => {
      registry.delete(el);
    };
  }, []);

  const play = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    soloPlay(el);
    el.muted = false;
    void el.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  /* Pause + mute when the section leaves the viewport, resume when it returns. */
  useEffect(() => {
    const host = wrapRef.current;
    const el = videoRef.current;
    if (!host || !el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
          if (!visible) {
            if (!el.paused) {
              wasPlaying.current = true;
              el.pause();
            }
            el.muted = true;
          } else if (wasPlaying.current && el.paused) {
            wasPlaying.current = false;
            soloPlay(el);
            el.muted = false;
            void el.play().catch(() => {});
          }
        }
      },
      { threshold: [0, 0.5, 0.9] },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);

  const seekBy = (delta: number) => {
    const el = videoRef.current;
    if (!el || !Number.isFinite(el.duration)) return;
    el.currentTime = Math.min(Math.max(el.currentTime + delta, 0), el.duration);
    setSeekHint(delta < 0 ? "back" : "forward");
    setTimeout(() => setSeekHint(null), 450);
  };

  const handleSurfacePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!started) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = x < rect.width * 0.33 ? -10 : x > rect.width * 0.67 ? 10 : 0;

    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      if (zone !== 0) seekBy(zone);
      else if (videoRef.current?.paused) play();
      else pause();
      return;
    }
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null;
      if (videoRef.current?.paused) play();
      else pause();
    }, 230);
  };

  /* Scrub line */
  const scrubbing = useRef(false);
  const scrubTo = (clientX: number) => {
    const bar = barRef.current;
    const el = videoRef.current;
    if (!bar || !el || !Number.isFinite(el.duration)) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    el.currentTime = ratio * el.duration;
    setProgress(ratio * 100);
  };

  useEffect(() => {
    const move = (e: PointerEvent) => scrubbing.current && scrubTo(e.clientX);
    const up = () => (scrubbing.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div ref={wrapRef} className={cn("relative select-none overflow-hidden bg-black", aspect, rounded, className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop
        preload="metadata"

        className="h-full w-full object-cover object-center"
        onPlay={() => {
          setStarted(true);
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (Number.isFinite(el.duration) && el.duration > 0 && !scrubbing.current) {
            setProgress((el.currentTime / el.duration) * 100);
          }
        }}
      />

      {/* Tap surface: single tap play/pause, double tap on the sides seeks. */}
      <div className="absolute inset-0" onPointerUp={handleSurfacePointer} />

      {/* Seek feedback */}
      {seekHint && (
        <div
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-xs font-bold text-primary backdrop-blur-sm",
            seekHint === "back" ? "left-4" : "right-4",
          )}
        >
          {seekHint === "back" ? "«  10s" : "10s  »"}
        </div>
      )}

      {/* First-run premium play button — appears once, never again. */}
      {!started && (
        <button
          type="button"
          aria-label="Play video"
          onClick={play}
          className="group absolute inset-0 z-10 grid place-items-center bg-black/25 transition-colors hover:bg-black/15"
        >
          <span className="relative grid size-14 place-items-center rounded-full border border-primary/60 bg-black/45 shadow-[0_0_28px_rgba(212,161,42,0.45)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:size-16">
            <span className="absolute inset-0 animate-pulse-dot rounded-full" />
            <svg viewBox="0 0 24 24" className="ml-0.5 size-6 fill-primary sm:size-7" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}

      {/* Paused-state subtle glyph after first play */}
      {started && !playing && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="grid size-12 place-items-center rounded-full bg-black/45 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="ml-0.5 size-5 fill-white/90" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </div>
      )}

      {/* Single scrub line — no other controls, no captions. */}
      <div
        ref={barRef}
        onPointerDown={(e) => {
          scrubbing.current = true;
          scrubTo(e.clientX);
        }}
        className="absolute inset-x-0 bottom-0 z-20 flex h-7 cursor-pointer items-end px-3 pb-2.5"
      >
        <div className="relative h-[3px] w-full rounded-full bg-white/25">
          <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          <span
            className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,161,42,0.9)]"
            style={{ left: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
