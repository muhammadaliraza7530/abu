import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck } from "lucide-react";
import { CtaBand, PageHero, Prose } from "@/components/PageBits";
import { Counter, Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import { stats } from "@/lib/site-data";
import {
  LeadershipSection,
  RegisteredSection,
  TeamSection,
  UpdatesSection,
} from "@/components/home/Sections";
import { VideoGallerySection } from "@/components/home/VideoSections";

const title = "About Abbu Turab | Govt. Registered Builders in DHA & Bahria Town";
const description =
  "Since 2014 Abbu Turab (A.T Developers) has designed, built and renovated luxury homes across Lahore — registered with DHA, Bahria Town, Lake City and all major departments.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Trust first",
    body: "Transparent BOQs, documented material schedules and no hidden costs. You know exactly where every rupee goes at every stage of the build.",
  },
  {
    title: "Engineered quality",
    body: "Certified steel, tested concrete mixes and senior engineers on site daily. Structural integrity is never traded for speed or margin.",
  },
  {
    title: "Design that lasts",
    body: "Elevations and interiors designed to age well — proportion, natural light and materials chosen so your home still feels current in 20 years.",
  },
  {
    title: "On-time handover",
    body: "Phase-wise scheduling with weekly progress reporting, so your project keeps moving and your handover date stays realistic and honoured.",
  },
];

const milestones = [
  { year: "2014", body: "Abbu Turab Design Studio founded in Lahore with a two-man architecture team and a single 10 marla commission." },
  { year: "2017", body: "Construction wing launched — grey structure and turnkey packages brought fully in-house for complete accountability." },
  { year: "2020", body: "Registered and approved to work inside DHA Lahore, Bahria Town and Lake City, plus LDA-approved drawing submissions." },
  { year: "2023", body: "Renovation and remodelling division added, restoring and re-elevating older homes across Lahore's premium societies." },
  { year: "2026", body: "300+ delivered projects, a 40-strong site and design team, and clients across Pakistan and overseas." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building dream homes with trust, quality & perfection"
        intro="Abbu Turab — A.T Developers is a full-service architecture, construction and renovation firm delivering luxury residences across Lahore and Pakistan-wide since 2014."
        image="/images/at/villa-2.webp"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="One team, from first sketch to final key" />
            <div className="mt-6">
              <Prose>
                <p>
                  Abbu Turab Design Studio & Construction Developers began in 2014 with a simple belief: a family
                  should not have to chase three different companies to get one home built properly. Architecture,
                  interior design, structural planning, construction and renovation all live under our roof — so
                  there is one team, one standard and one point of accountability from the day you hand over your
                  plot file to the day you receive your keys.
                </p>
                <p>
                  Over twelve years we have designed and delivered more than 300 projects — from 5 marla family
                  homes to 2 kanal luxury residences, commercial floors and complete house renovations. Every
                  project begins with your plot, your family's routine and your realistic budget, and ends with a
                  home that is structurally sound, beautifully finished and genuinely liveable.
                </p>
                <p>
                  Our in-house architects prepare full 2D working drawings, structural details and photoreal 3D
                  elevations. Our site engineers execute them with certified materials, tested mixes and weekly
                  documented progress. Our interior team closes the loop with ceilings, joinery, lighting and
                  finishes that match the renderings you approved.
                </p>
              </Prose>
            </div>
          </Reveal>
          <Reveal delay={140} className="grid grid-cols-2 gap-4">
            <img src="/images/at/villa-1.webp" alt="Luxury villa built by Abbu Turab" loading="lazy" decoding="async" className="col-span-2 h-56 w-full rounded-2xl object-cover sm:h-72" />
            <img src="/images/at/interior-1.webp" alt="Luxury interior finishing" loading="lazy" decoding="async" className="h-40 w-full rounded-2xl object-cover sm:h-52" />
            <img src="/images/at/construction.webp" alt="Construction site progress" loading="lazy" decoding="async" className="h-40 w-full rounded-2xl object-cover sm:h-52" />
          </Reveal>
        </div>
      </section>

      <RegisteredSection />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <Panel key={s.label} className="bg-card/40 p-6 sm:p-8 text-center">
                <p className="font-display text-3xl font-extrabold text-primary lg:text-5xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </Panel>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Our values" title="How we work" align="center" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 110}>
                  <Panel className="h-full bg-card/40 p-5 sm:p-7">
                    <CircleCheck className="size-6 text-primary" />
                    <h3 className="mt-4 text-base sm:text-lg">{v.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm">{v.body}</p>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Our journey" title="Twelve years, brick by brick" align="center" />
            <div className="mx-auto mt-12 max-w-3xl">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 90}>
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-l border-border pb-8 pl-6 last:pb-0">
                    <span className="-ml-[2.1rem] mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-primary/50 bg-background text-[10px] font-bold text-primary">
                      {m.year.slice(2)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{m.year}</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoGallerySection />
      <UpdatesSection />
      <LeadershipSection />
      <TeamSection />

      <CtaBand />
    </>
  );
}
