import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, offices, services, site } from "@/lib/site-data";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1FQM3DxxeP/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/a.tdevelopers?igsh=ZDEwMXJzd213bDh3",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abbuturabofficial",
    icon: Linkedin,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@abbuturabofficial?is_from_webapp=1&sender_device=pc",
    // TikTok SVG component since Lucide doesn't include TikTok
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.52-1.29 2.51.02.93.52 1.8 1.32 2.27.8.48 1.83.5 2.65.04.82-.44 1.37-1.3 1.41-2.24.03-4.14.01-8.28.01-12.42z" />
      </svg>
    ),
  },
];

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
            
            {/* Social Icons Section */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                    className="grid size-10 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
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
