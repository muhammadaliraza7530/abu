import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, CircleCheck } from "lucide-react";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import { disciplines, registrations, services } from "@/lib/site-data";

const title = "Services | Architecture, Construction & Renovation — Abbu Turab";
const description =
  "Architectural design, turnkey construction, renovation and luxury interiors in Lahore. Govt. registered for DHA, Bahria Town, Lake City and all private societies.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

const process = [
  { step: "01", title: "Consultation", body: "We discuss your plot, family requirements, timeline and realistic budget — free of charge, at our office or on your site." },
  { step: "02", title: "Design & 3D", body: "Architectural plans, structural drawings and photoreal 3D elevations, revised until you approve every detail." },
  { step: "03", title: "Approvals", body: "Society and authority drawing submissions handled by us — DHA, Bahria Town, Lake City, LDA and beyond." },
  { step: "04", title: "Construction", body: "Foundation, grey structure and finishing under senior engineers, with certified materials and weekly reporting." },
  { step: "05", title: "Interior", body: "Ceilings, joinery, kitchens, wardrobes, lighting and finishes installed to match the approved renderings." },
  { step: "06", title: "Handover", body: "Snagging, cleaning, utility connections and completion documentation — then your keys, on schedule." },
];

const packages = [
  { name: "Grey Structure", body: "Foundation, columns, slabs, brickwork, plumbing and electrical conduiting — structurally complete, ready for finishing.", items: ["Certified steel & tested mixes", "Plumbing & electrical conduiting", "Boundary walls & roof slabs"] },
  { name: "Turnkey Construction", body: "Everything from marking to keys: grey structure, finishes, interiors, landscaping and completion paperwork.", items: ["Grey structure + full finishing", "Interior & joinery included", "Single accountable contract"] },
  { name: "Renovation Package", body: "Re-elevate, remodel and repair existing homes — facades, kitchens, baths, waterproofing and structural fixes.", items: ["Facade & elevation upgrade", "Kitchen & bathroom remodelling", "Waterproofing & repairs"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Architecture · Construction · Renovation"
        intro="Four disciplines under one accountable roof — design it, build it, renovate it, style it, with a government-registered firm approved across DHA, Bahria Town and Lake City."
        image="/images/at/construction.webp"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl space-y-20 px-5 lg:px-8">
          {disciplines.map((d, i) => (
            <div key={d.slug} id={d.slug} className="scroll-mt-28">
              <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <img src={d.cover} alt={d.title} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:text-xs">{d.tagline}</p>
                  <h2 className="mt-3 text-2xl leading-tight sm:text-4xl">{d.title}</h2>
                  <p className="mt-4 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm sm:text-base">{d.body}</p>
                  <ul className="mt-6 space-y-3">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-foreground">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {d.images.map((img) => (
                  <img key={img} src={img} alt={d.title} loading="lazy" decoding="async" className="aspect-square w-full rounded-xl object-cover" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading eyebrow="Specialisms" title="What else we do" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 130} className="scroll-mt-28">
                <Panel className="h-full overflow-hidden bg-background">
                  <span id={s.slug} className="block scroll-mt-28" />
                  <img src={s.image} alt={s.title} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-t-[1.2rem] object-cover" />
                  <div className="p-6 sm:p-7">
                    <h3 className="text-base sm:text-lg">{s.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm">{s.body}</p>
                  </div>
                </Panel>
              </Reveal>

            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Choose your scope" align="center" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <Panel className="h-full bg-card/40 p-5 sm:p-7">
                  <h3 className="text-base sm:text-lg">{p.name}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm">{p.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-foreground">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="min-w-0">{it}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Process" title="How your project runs" align="center" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 90}>
                  <Panel className="h-full bg-card/40 p-5 sm:p-7">
                    <span className="font-display text-3xl font-extrabold text-primary/40">{p.step}</span>
                    <h3 className="mt-3 text-base sm:text-lg">{p.title}</h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-pretty text-muted-foreground sm:text-sm">{p.body}</p>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 flex flex-wrap justify-center gap-2.5">
              {registrations.map((r) => (
                <span key={r.name} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card/40 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] sm:text-xs">
                  <BadgeCheck className="size-3.5 shrink-0 text-primary" /> {r.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
