import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border bg-black/90 backdrop-blur-md" : "border-b border-transparent bg-black",
      )}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:h-20 sm:gap-3 sm:px-5 lg:flex lg:h-24 lg:justify-between lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <img
            src={site.logo}
            alt="Abbu Turab logo"
            width={70}
            height={70}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-12 w-auto shrink-0 rounded-lg object-contain sm:h-16 lg:h-[70px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="relative px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground"
          >
            <Phone className="size-4 text-primary" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full border border-primary bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-black/97 px-5 pb-8 pt-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="size-4 text-primary" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground"
          >
            Get a quote
          </Link>
        </div>
      )}
    </header>
  );
}
