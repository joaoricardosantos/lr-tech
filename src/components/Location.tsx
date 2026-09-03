import { useEffect, useState } from "react";
import { hours, site } from "../data/site";
import { getOpenStatus } from "../hours";
import { ClockIcon, PinIcon } from "../icons";

export function Location() {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="onde" className="bg-ink-soft">
      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:px-14">
          <p className="section-kicker">Onde estamos</p>
          <div className="gold-line mt-4" />
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            Av. Paraíba, no coração da Cidade da Esperança.
          </h2>
          <p className="mt-5 flex items-start gap-3 text-lg text-white/75">
            <PinIcon className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <span>{site.addressFull}</span>
          </p>
          <p
            className={`mt-6 flex items-center gap-3 text-lg font-semibold ${
              status.open ? "text-gold" : "text-white/80"
            }`}
          >
            <ClockIcon className="h-6 w-6 shrink-0" />
            <span>{status.label}</span>
          </p>
          <ul className="mt-8 space-y-3 text-lg text-white/85">
            {hours.map((row) => (
              <li
                key={row.days}
                className="flex justify-between gap-6 border-b border-white/10 pb-3"
              >
                <span>{row.days}</span>
                <span className="font-display font-semibold text-gold">{row.range}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/45">
            Sábado conforme cadastro público — confirme no WhatsApp se necessário.
          </p>
          <a
            className="btn btn-gold mt-8 w-fit"
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
        <div className="min-h-[320px] bg-ink md:min-h-[420px] lg:min-h-full">
          <iframe
            title={`Mapa da ${site.name} em ${site.neighborhood}, Natal`}
            src={site.mapsEmbed}
            className="h-full min-h-[320px] w-full border-0 md:min-h-[420px] lg:min-h-[640px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
