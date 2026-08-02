import { VideoPlayer } from "@/components/VideoPlayer";
import { videoGallery } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui-bits";

/** Hero showreel — never autoplays, one tap on the gold button starts it. */
export function ShowreelSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-16 lg:py-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Showreel</p>
          <h2 className="mt-3 text-xl font-extrabold uppercase leading-tight sm:text-3xl lg:text-5xl">
            Inside an Abbu Turab build
          </h2>
        </div>
        <div className="mx-auto flex justify-center">
          <div className="w-full max-w-[26rem] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/80 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:max-w-[30rem]">
            <VideoPlayer src="/video/video.mp4" poster="/video/video.webp" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** 2 × 2 video gallery — only one video may play at a time. */
export function VideoGallerySection() {
  return (
    <section id="video-gallery" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading eyebrow="Video gallery" title="Our work, in motion" align="center" />
        <div className="mx-auto mt-12 grid max-w-[44rem] grid-cols-2 gap-3 sm:gap-5">
          {videoGallery.map((v) => (
            <div key={v.src} className="lit-panel overflow-hidden bg-card/50 p-1.5 sm:p-2">
              <VideoPlayer
                src={v.src}
                poster={v.poster ?? v.src.replace(".mp4", ".webp")}
                rounded="rounded-[1rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
