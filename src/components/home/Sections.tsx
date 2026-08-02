import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CircleCheck, MapPin, Quote } from "lucide-react";
import { AutoScroller } from "@/components/AutoScroller";
import { Counter, Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import {
  disciplines,
  leader,
  leaderPoints,
  projects,
  registrations,
  services,
  stats,
  team,
  testimonials,
  updates,
} from "@/lib/site-data";

export function ProjectsSection() {
  const sneakPeek = projects.slice(0, 3);

  return (
    <section id="projects" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Current projects"
            title="Latest residential and renovation work"
            intro="A quick look at our active projects in DHA, Bahria Town and Lake City. See the full portfolio on the Projects page."
            align="left"
          />
          <Link
            to="/projects"
            className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
          >
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {sneakPeek.map((project) => (
            <Panel key={project.title} className="overflow-hidden bg-card/50">
              <img
                src={project.image}
                alt={`${project.title}, ${project.location}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="p-5">
                <p className="text-sm font-semibold text-foreground">{project.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">{project.location}</p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card/30 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 lg:px-8">
        {stats.map((s) => (
          <Panel key={s.label} className="bg-background p-7 transition-transform duration-500 hover:-translate-y-1 lg:p-10">
            <p className="font-display text-3xl font-extrabold text-primary lg:text-5xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

/** Architecture & Construction · Finishing — each box opens its own photo page. */
export function DisciplinesSection() {
  return (
    <section id="disciplines" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What we build"
          title="Architecture & Construction · Finishing"
          intro="Four disciplines, one accountable team. Open a card to see real work from our sites."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.slug} className="reveal-step h-full" delay={i * 130}>
              <Panel className="group h-full overflow-hidden bg-card/50">
                <Link to="/work/$slug" params={{ slug: d.slug }} className="flex h-full flex-col">
                  <div className="relative overflow-hidden rounded-t-[1.2rem]">
                    <img
                      src={d.cover}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg">{d.title}</h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary">{d.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    <ul className="mt-4 space-y-2">
                      {d.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-foreground">
                          <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="min-w-0">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="btn-shake mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      View photos <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegisteredSection() {
  // Load only actual files present in /public/images/logos via Vite glob.
  // Use the explicit public path and eager import so Vite can replace the call at build time.
  const logosMap = import.meta.glob("/public/images/logos/*.{webp,png,jpg,jpeg}", {
    eager: true,
    import: "default",
  });

  // Build list of logos from the glob keys. Ensure src resolves to /images/logos/<filename>
  const logos = Object.keys(logosMap).map((p) => {
    const filename = p.split("/").pop() ?? ""; // e.g. "fbr.webp"
    const nameRaw = filename.replace(/\.(webp|png|jpg|jpeg)$/i, "");
    // Replace dashes/underscores with spaces, turn 'AND' into '&', then uppercase
    const name = nameRaw.replace(/[-_]+/g, " ").replace(/\bAND\b/gi, "&").trim().toUpperCase();
    const src = `/images/logos/${filename}`;
    return { name, src };
  });

  // Only render logos that actually exist in the folder. Duplicate the array for the scroller.
  const loop = [...logos, ...logos];

  const privateSocietiesMap = import.meta.glob("/public/images/Private Registered Center/*.{webp,png,jpg,jpeg}", {
    eager: true,
    import: "default",
  });

  const privateSocieties = Object.keys(privateSocietiesMap).map((p) => {
    const filename = p.split("/").pop() ?? "";
    const nameRaw = filename.replace(/\.(webp|png|jpg|jpeg)$/i, "");
    const name = nameRaw.replace(/[-_]+/g, " ").replace(/\bAND\b/gi, "&").trim().toUpperCase();
    const src = `/images/Private Registered Center/${filename}`;
    return { name, src };
  });

  const privateLoop = [...privateSocieties, ...privateSocieties];

  return (
    <>
      <section className="relative overflow-hidden border-y border-border bg-card/40 py-14 lg:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-primary sm:text-xs">
              <BadgeCheck className="size-4" /> GOVERNMENT REGISTERED
            </p>
            <h2 className="mt-5 text-xl leading-tight sm:text-3xl lg:text-4xl">
              Registered &amp; approved with <span className="text-primary">all major departments</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A licensed, government-registered construction firm — approved to design, build and renovate inside DHA,
              Bahria Town, Lake City and every other private housing society.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-10 lg:mt-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />
            <AutoScroller speed={0.055} innerClassName="gap-4 px-5 lg:px-8">
              {loop.map((r, i) => (
                <figure
                  key={`${r.name}-${i}`}
                  className="group flex w-[150px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-background/80 px-4 py-5 backdrop-blur transition-transform duration-500 hover:-translate-y-1 hover:border-primary/60 sm:w-[190px] sm:px-6 sm:py-7"
                >
                  <span className="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 sm:h-20 sm:p-3">
                    <img
                      src={r.src}
                      alt={`${r.name} logo`}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <figcaption className="text-center text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary sm:text-[11px]">
                    {r.name}
                  </figcaption>
                </figure>
              ))}
            </AutoScroller>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-card/40 py-14 lg:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-primary sm:text-xs">
              <BadgeCheck className="size-4" /> APPROVED PRIVATE SOCIETIES
            </p>
            <h2 className="mt-5 text-xl leading-tight sm:text-3xl lg:text-4xl">
              Approved &amp; registered in <span className="text-primary">major housing societies</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Approved to design, build, and execute projects across top housing societies including Bahria Town, DHA,
              Lake City, Citi Housing, and more.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-10 lg:mt-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />
            <AutoScroller speed={0.055} innerClassName="gap-4 px-5 lg:px-8">
              {privateLoop.map((r, i) => (
                <figure
                  key={`${r.name}-${i}`}
                  className="group flex w-[150px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-background/80 px-4 py-5 backdrop-blur transition-transform duration-500 hover:-translate-y-1 hover:border-primary/60 sm:w-[190px] sm:px-6 sm:py-7"
                >
                  <span className="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 sm:h-20 sm:p-3">
                    <img
                      src={r.src}
                      alt={`${r.name} logo`}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <figcaption className="text-center text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary sm:text-[11px]">
                    {r.name}
                  </figcaption>
                </figure>
              ))}
            </AutoScroller>
          </div>
        </Reveal>
      </section>
    </>
  );
}




export function LeadershipSection() {
  return (
    <section id="leadership" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="The mind behind Abbu Turab" align="center" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:items-center">
          <Reveal>
            <Panel className="mx-auto w-full max-w-sm overflow-hidden bg-card/50 text-center">
              <img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-t-[1.2rem] object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg capitalize">{leader.name}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
                  {leader.role} · Since {leader.since}
                </p>
              </div>
            </Panel>
          </Reveal>
          <Reveal delay={140}>
            <Quote className="size-8 text-primary" />
            <p className="mt-4 text-base leading-relaxed text-foreground sm:text-xl">“{leader.quote}”</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Abbu Turab Design Studio & Construction Developers is led end-to-end by one accountable team —
              architecture, interior, structural planning, renovation and site execution under a single roof.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {leaderPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                  <CircleCheck className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              About us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our team" title="People who build your dream" />
          <Reveal>
            <Link
              to="/about"
              className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
            >
              Meet the team <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} className="reveal-step w-full" delay={i * 120}>
              <Panel className="group w-full overflow-hidden bg-card/50">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="truncate text-sm sm:text-lg">{m.name}</h3>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-primary sm:text-[10px]">{m.role}</p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our services" title="What we do best" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} className="reveal-step" delay={i * 170}>
              <Panel className="group h-full overflow-hidden bg-card/50">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-transform hover:translate-x-1"
                  >
                    Learn more <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Reveal>
            <Link
              to="/services"
              className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function UpdatesSection() {
  const loop = [...updates, ...updates];
  return (
    <section className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Site updates"
          title="Live from our projects"
          intro="A snapshot of live A.T Developers builds — swipe through project milestones straight from site."
          align="center"
        />
      </div>
      <AutoScroller className="mt-12 py-4" innerClassName="gap-6 px-5" speed={0.15}>
        {loop.map((u, i) => (
          <Panel key={`${u.image}-${i}`} className="group flex w-[19rem] shrink-0 flex-col overflow-hidden bg-card/50 sm:w-[26rem]">
            <img
              src={u.image}
              alt={u.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="aspect-[4/3] w-full rounded-t-[1.2rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="w-fit rounded-full border border-primary/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                {u.tag}
              </span>
              <h3 className="mt-3 font-display text-base leading-snug sm:text-lg">{u.title}</h3>
              <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-primary sm:text-xs">
                <MapPin className="size-3.5 shrink-0" />
                {u.location}
              </p>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
            </div>
          </Panel>
        ))}
      </AutoScroller>
    </section>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="border-t border-border bg-gradient-to-b from-background to-card/20 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
      </div>
      <AutoScroller className="mt-12 py-4" innerClassName="gap-5 px-5" speed={0.15}>
        {loop.map((t, i) => (
          <Panel
            key={`${t.name}-${i}`}
            className="relative flex min-h-[16rem] w-[19rem] shrink-0 flex-col overflow-hidden bg-card/60 p-6 text-left shadow-lg backdrop-blur-sm sm:w-[22rem] sm:p-8"
          >
            <Quote className="pointer-events-none absolute right-4 top-4 size-20 rotate-180 text-primary/5" />
            <div className="flex-1">
              <Quote className="size-7 text-primary" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">“{t.quote}”</p>
            </div>
            <div className="mt-7 flex items-center gap-4 border-t border-border/50 pt-5">
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-lg font-bold text-primary ring-2 ring-primary/20">
                {t.name[0]}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{t.name}</p>
                <p className="truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Panel>
        ))}
      </AutoScroller>
    </section>
  );
}
