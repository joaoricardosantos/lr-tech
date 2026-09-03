import { Link } from "react-router-dom";
import { nav, site } from "../data/site";
import { InstagramIcon, WhatsAppIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-black text-white">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label={`${site.name} — início`}>
            <Logo className="h-14 w-auto md:h-16" />
          </Link>
          <p className="mt-4 max-w-xs text-white/65">
            {site.niche} na {site.neighborhood}, {site.city}.
          </p>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Menu
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="inline-flex min-h-11 items-center text-white/80 transition hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contato
          </p>
          <p className="mt-4 text-white/70">{site.addressFull}</p>
          <a
            className="mt-4 inline-flex min-h-12 items-center gap-2 font-semibold text-white transition hover:text-gold"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
          <a
            className="mt-2 flex min-h-11 items-center gap-2 text-white/75 transition hover:text-gold"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
          </a>
        </div>
      </div>
      <div className="page-wrap flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-white/45 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Natal — RN.
        </p>
        <p>Primeira presença web oficial da casa.</p>
      </div>
    </footer>
  );
}
