import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/PageBits";
import { Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import { offices, registrations, services, site } from "@/lib/site-data";

const title = "Contact Abbu Turab | Free Consultation for Your Build in Lahore";
const description =
  "Talk to Abbu Turab — A.T Developers. Call +92 336 9661111 or send your plot details for a free architecture, construction or renovation consultation in Lahore.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "Do you work outside Lahore?", a: "Yes. Our head office is in DHA Lahore, and we deliver projects Pakistan-wide including Islamabad, Karachi and Multan, with resident site supervision on every out-of-city build." },
  { q: "Which societies are you registered in?", a: "DHA (all phases), Bahria Town, Bahria Orchard, Lake City, Park View, Etihad Town and all other private societies — plus LDA-approved private plots." },
  { q: "How long does a 1 kanal house take?", a: "Typically 12–16 months for a turnkey 1 kanal home, depending on finishing scope. Grey structure alone is usually 5–7 months." },
  { q: "Is the first consultation free?", a: "Yes. Site visit, requirement discussion and a preliminary budget estimate are completely free of charge with no obligation." },
];

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = `Hello Abbu Turab,%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0ALocation: ${data.get("location")}%0A%0A${data.get("message")}`;
    setSending(true);
    window.open(`https://wa.me/${site.phoneTel.replace("+", "")}?text=${message}`, "_blank", "noopener");
    toast.success("Opening WhatsApp — your details are ready to send.");
    form.reset();
    setSending(false);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's build your dream home"
        intro="Tell us your plot size, society and budget. Our team responds the same working day with a free consultation and a realistic estimate."
        image="/images/at/villa-4.webp"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:px-8">
          <Reveal>
            <Panel className="bg-card/40 p-6 sm:p-9">
              <h2 className="text-xl sm:text-2xl">Request a consultation</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fill this in and we'll continue on WhatsApp.</p>
              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={field} />
                  <input name="phone" required type="tel" placeholder="Phone number" className={field} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <select name="service" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Select service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                    <option>Renovation &amp; Remodelling</option>
                  </select>
                  <input name="location" placeholder="Society / location" className={field} />
                </div>
                <textarea name="message" rows={5} placeholder="Plot size, budget and anything else we should know" className={field} />
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-shake sheen-on-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
                >
                  Send on WhatsApp <Send className="size-4" />
                </button>
              </form>
            </Panel>
          </Reveal>

          <Reveal delay={130} className="space-y-4">
            <Panel className="bg-card/40 p-6 sm:p-8">
              <h3 className="text-lg">Our offices</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                {offices.map((o) => (
                  <li key={o.address} className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                        {o.label}
                      </span>
                      <a href={o.link} target="_blank" rel="noreferrer" className="hover:text-primary">
                        {o.address}
                      </a>
                    </span>
                  </li>
                ))}
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={`tel:${site.phoneTel}`} className="hover:text-primary">{site.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-primary">{site.email}</a>
                </li>
                <li>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reg-chip inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-background px-4 py-2.5"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#1877F2]">
                      <svg viewBox="0 0 24 24" className="size-4 fill-white" aria-hidden="true">
                        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                      </svg>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground sm:text-[11px]">Follow us on Facebook</span>
                  </a>
                </li>
              </ul>
            </Panel>

            <Panel className="bg-card/40 p-6 sm:p-8">
              <h3 className="text-lg">Business hours</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="text-foreground">{h.day}</span> — {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="bg-card/40 p-6 sm:p-8">
              <h3 className="text-lg">Registered & approved</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {registrations.map((r) => (
                  <span key={r.name} className="rounded-full border border-primary/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                    {r.name}
                  </span>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-card/25 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading eyebrow="Find us" title="Visit either of our two offices" align="center" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.address} delay={90 + i * 90}>
                <Panel className="overflow-hidden bg-background p-1.5">
                  <iframe
                    title={`Abbu Turab ${o.label} — ${o.address}`}
                    src={o.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[16rem] w-full rounded-[0.95rem] border-0 grayscale-[0.35] sm:h-[21rem]"
                  />
                  <div className="px-4 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{o.label}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{o.address}</p>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Chat on WhatsApp — {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Good to know" align="center" />
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <Panel className="bg-card/40 p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg">{f.q}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
