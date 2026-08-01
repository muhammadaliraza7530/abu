import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui-bits";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-center overflow-hidden pb-16 pt-32 sm:min-h-[70vh] sm:pt-40">
      <img
        src={image}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/60" />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">{eyebrow}</p>
          <h1 className="mt-4 text-2xl font-extrabold uppercase leading-[1.1] sm:text-4xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to start your project?",
  body = "Share your plot size, location and budget — our team will prepare a free consultation and estimate.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-xl leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p>
          <Link
            to="/contact"
            className="btn-shake sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Request a consultation <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>;
}
