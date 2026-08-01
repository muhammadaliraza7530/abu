import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AutoScroller } from "@/components/AutoScroller";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import { galleryImages, portfolioProjects, projectUpdates, projectVideos } from "@/lib/site-data";


const title = "Projects | Luxury Homes Built in DHA, Bahria Town & Lake City";
const description =
  "Browse Abbu Turab's delivered projects — 1 and 2 kanal luxury villas, modern townhouses, interiors and renovations across DHA Lahore, Bahria Town and Lake City.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const rail = [...portfolioProjects, ...portfolioProjects];

  return (
    <>
      <PageHero
        eyebrow="Our projects"
        title="Clients' dreams, delivered"
        intro="Over 300 completed homes and counting — architecture, construction, interiors and renovations across Lahore's premium societies."
        image="/images/portfolio/p1.jpg"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Portfolio" title="Selected work" align="center" />
        </div>
        <AutoScroller className="mt-12 py-4" innerClassName="gap-6 px-5" speed={0.15}>
          {rail.map((p, i) => (
            <Panel key={`${p.title}-${i}`} className="group flex w-[19rem] shrink-0 flex-col overflow-hidden bg-card/50 sm:w-[26rem]">
              <img
                src={p.image}
                alt={`${p.title}, ${p.location}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="aspect-[4/3] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-base leading-snug sm:text-lg">{p.title}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">
                  <MapPin className="size-3.5 shrink-0" /> {p.location}
                </p>
              </div>
            </Panel>
          ))}
        </AutoScroller>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {portfolioProjects.map((p, i) => (
            <Reveal key={`${p.title}-grid-${i}`} delay={(i % 3) * 110}>
              <Panel className="group relative h-full overflow-hidden bg-card/40">
                <img
                  src={p.image}
                  alt={`${p.title}, ${p.location}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg">{p.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">
                    <MapPin className="size-3.5 shrink-0" /> {p.location}
                  </p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Site updates" title="Live from our sites" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectUpdates.map((u, i) => (
              <Reveal key={u.title} delay={(i % 3) * 110}>
                <Panel className="flex h-full flex-col overflow-hidden bg-background">
                  <img src={u.image} alt={u.title} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-t-[1.2rem] object-cover" />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="w-fit rounded-full border border-primary/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">{u.tag}</span>
                    <h3 className="mt-3 text-base sm:text-lg">{u.title}</h3>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-primary">{u.location}</p>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Details we obsess over" align="center" />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img} delay={(i % 4) * 90}>
                <Panel className="group overflow-hidden bg-card/40 p-1.5">
                  <img
                    src={img}
                    alt="Abbu Turab project detail"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full rounded-[0.95rem] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="project-videos" className="border-t border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Video walkthroughs" title="See our projects in motion" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectVideos.map((v, i) => (
              <Reveal key={v.src} delay={(i % 3) * 110}>
                <div className="group relative overflow-hidden rounded-[1.35rem] border border-primary/25 bg-background p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_70px_rgba(212,161,42,0.22)]">
                  <video
                    src={v.src}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] w-full rounded-[1.1rem] bg-black object-cover"
                  />
                  <p className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs">{v.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
