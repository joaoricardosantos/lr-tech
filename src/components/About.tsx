import { photos, site } from "../data/site";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          {/* PLACEHOLDER: Unsplash — substituir por foto real da loja/equipe */}
          <div className="overflow-hidden rounded-2xl border border-gold/25 shadow-gold">
            <img
              src={photos.about.src}
              alt={photos.about.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-white/55">
            Identidade premium · {site.neighborhood}, {site.city}
          </p>
        </div>
        <div>
          <p className="section-kicker">A marca</p>
          <div className="gold-line mt-4" />
          <h2 className="mt-5 max-w-lg font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            Confiança técnica com acabamento premium.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            A {site.name} é assistência técnica especializada em smartphones na{" "}
            {site.neighborhood}. O compromisso é claro: diagnóstico honesto, reparo
            cuidadoso e soluções que devolvem o aparelho à rotina.
          </p>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Além do reparo, oferecemos vendas de smartphones e acessórios — um ponto
            único para quem busca qualidade sem improvisos.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-ink-soft px-4 py-3">
              Especialistas em iPhone e Android
            </li>
            <li className="rounded-lg border border-white/10 bg-ink-soft px-4 py-3">
              Atendimento direto e objetivo
            </li>
            <li className="rounded-lg border border-white/10 bg-ink-soft px-4 py-3">
              Nota máxima no Google
            </li>
            <li className="rounded-lg border border-white/10 bg-ink-soft px-4 py-3">
              Localização na Av. Paraíba
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
