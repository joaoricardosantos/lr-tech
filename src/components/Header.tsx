import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { WhatsAppIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const location = useLocation();
  const home = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  const linkTo = (href: string) => (home ? href : `/${href}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-200 ${
        scrolled || open
          ? "border-white/10 bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-ink/40 backdrop-blur-sm"
      }`}
    >
      <div className="page-wrap flex h-[4.5rem] items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex min-h-12 items-center"
          aria-label={`${site.name} — início`}
        >
          <Logo className="h-10 w-auto md:h-12" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={linkTo(item.href)}
              className="font-display text-sm font-semibold tracking-wide text-white/85 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-gold"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-0.5 w-6 bg-gold transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="page-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={linkTo(item.href)}
                className="flex min-h-12 items-center font-display text-lg font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-gold mt-2 w-full"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
