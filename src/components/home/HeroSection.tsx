import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-24">
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            aria-hidden
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover transition-all duration-[1600ms] ease-in-out ${
              i === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center">
        <div key={index} className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary sm:text-sm">
            WELCOME TO
          </span>
          <span className="mt-2 block overflow-hidden pb-2">
          <h1 className="hero-rise animate-text-shine bg-[linear-gradient(110deg,#d4a12a,45%,#fff8e6,55%,#d4a12a)] bg-[length:250%_100%] bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent drop-shadow-[0_2px_15px_rgba(212,161,42,0.4)] sm:text-6xl md:text-7xl">
            ABBU TURAB
          </h1>
          </span>
          <h2 className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/90 sm:text-sm md:text-base">
            Architecture & Construction · Finishing
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
            A full-service architecture, construction & renovation firm — design, grey structure, interiors and
            turnkey delivery across Pakistan.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {["Government. Registered", "Private Registered Center",].map((b) => (
              <span
                key={b}
                className="rounded-full border border-primary/40 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur-sm sm:text-[11px]"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3.5 sm:max-w-lg">
            <Link
              to="/projects"
              className="btn-shake sheen-on-hover inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-accent active:scale-[0.98]"
            >
              VIEW PROJECTS <ArrowRight className="size-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-shake sheen-on-hover inline-flex w-full items-center justify-center rounded-2xl border border-white/30 bg-black/40 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-black/60 hover:text-primary active:scale-[0.98]"
            >
              REQUEST CONSULTATION
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-primary" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
