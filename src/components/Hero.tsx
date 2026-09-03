import { photos, site } from "../data/site";
import { ArrowIcon, StarIcon, WhatsAppIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gold-glow" />
      <div className="relative grid min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32 lg:justify-center lg:px-14 lg:pt-20">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-sm text-gold">
            <StarIcon className="h-4 w-4" />
            {site.googleRating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} no Google ·{" "}
            {site.googleReviewCount} avaliações
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.12] tracking-tight"
          >
            Assistência técnica especializada para o seu smartphone.
          </h1>
          <p className="mt-4 max-w-md text-base text-white/80 md:text-lg">
            {site.description} Reparo premium, venda de aparelhos e acessórios na{" "}
            {site.neighborhood}, {site.city}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="btn btn-gold"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir orçamento
            </a>
            <a className="btn btn-ghost" href="#servicos">
              Ver serviços
              <ArrowIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[42vh] w-full overflow-hidden lg:min-h-[100svh]">
          {/* PLACEHOLDER: Unsplash — substituir pela fachada / bancada real da loja */}
          <img
            src={photos.hero.src}
            alt={photos.hero.alt}
            width={1600}
            height={1200}
            className="hero-photo absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-ink/30 lg:to-ink/80" />
          <div className="absolute bottom-6 left-5 right-5 rounded-xl border border-gold/30 bg-ink/80 p-4 backdrop-blur-md md:left-auto md:right-8 md:w-72">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Soluções inovadoras
            </p>
            <p className="mt-2 text-sm text-white/80">
              iPhone e Android · diagnóstico técnico · atendimento direto no WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
