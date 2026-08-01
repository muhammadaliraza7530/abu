import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, offices, services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <img src={site.logo} alt="Abbu Turab logo" loading="lazy" decoding="async" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Architecture · Interior · Construction · Renovation. Building luxury residences across Lahore and
              Pakistan-wide since 2014, with trust, quality and perfection.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Abbu Turab on Facebook"
              className="reg-chip mt-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-background px-4 py-2.5"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#1877F2]">
                <svg viewBox="0 0 24 24" className="size-4 fill-white" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]">
                Follow us on Facebook
              </span>
            </a>

          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-primary">Business hours</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.day} className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="min-w-0">
                    {h.day}: {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact</h3>
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
                <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Abbu Turab. All rights reserved.</p>
          <p>Design and develop by brandup</p>
          <p className="uppercase tracking-[0.2em]">Lahore · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
