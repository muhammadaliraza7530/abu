import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import { disciplinePhotos, disciplines } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = disciplines.find((d) => d.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable | Abbu Turab" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.item.title} Photos | Abbu Turab Lahore`;
    const d = `${loaderData.item.body} Real ${loaderData.item.title.toLowerCase()} projects delivered by Abbu Turab across DHA, Bahria Town and Lake City, Lahore.`;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: DisciplinePage,
});

function DisciplinePage() {
  const { item } = Route.useLoaderData();
  const photos = disciplinePhotos[item.slug] ?? item.images;
  const others = disciplines.filter((d) => d.slug !== item.slug);

  return (
    <>
      <PageHero eyebrow={item.tagline} title={item.title} intro={item.body} image={item.cover} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Link
              to="/"
              hash="disciplines"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to disciplines
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-3">
            <ul className="flex flex-wrap gap-2.5">
              {item.points.map((p: string) => (
                <li
                  key={p}
                  className="reg-chip inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs"
                >
                  <CircleCheck className="size-3.5 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {photos.map((img, i) => (
              <Reveal key={`${img}-${i}`} className="reveal-step" delay={(i % 3) * 90}>
                <Panel className="group overflow-hidden bg-card/40 p-1.5">
                  <img
                    src={img}
                    alt={`${item.title} project by Abbu Turab`}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-[0.95rem] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/25 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Explore more" title="Our other disciplines" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {others.map((d, i) => (
              <Reveal key={d.slug} className="reveal-step" delay={i * 120}>
                <Panel className="group h-full overflow-hidden bg-background">
                  <Link to="/work/$slug" params={{ slug: d.slug }} className="block">
                    <img
                      src={d.cover}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/9] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
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

      <CtaBand />
    </>
  );
}
