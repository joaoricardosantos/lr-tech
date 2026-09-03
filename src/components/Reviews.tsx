import { reviews, site } from "../data/site";
import { StarIcon } from "../icons";

function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className={`h-4 w-4 ${index < value ? "opacity-100" : "opacity-25"}`} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-ink py-20 md:py-28">
      <div className="page-wrap">
        <p className="section-kicker">Prova social</p>
        <div className="gold-line mt-4" />
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          {site.googleRating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} no Google ·{" "}
          {site.googleReviewCount} avaliações
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          Clientes reais recomendam a {site.name}. Transparência e qualidade no reparo
          fazem a diferença quando o aparelho precisa de confiança.
        </p>

        {reviews.length > 0 ? (
          <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reviews.map((review) => (
              <li
                key={`${review.author}-${review.quote.slice(0, 24)}`}
                className="rounded-2xl border border-gold/20 bg-ink-soft p-6 md:p-8"
              >
                <Stars value={review.rating} />
                <blockquote className="mt-4 text-lg leading-relaxed text-white/90">
                  “{review.quote}”
                </blockquote>
                <p className="mt-5 font-display text-sm font-semibold text-gold">
                  {review.author}
                </p>
                <p className="text-sm text-white/45">Google</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gold/25 bg-ink-soft p-6 md:col-span-1">
              <p className="font-display text-5xl font-bold text-gold">5,0</p>
              <Stars value={5} />
              <p className="mt-3 text-white/70">
                Média confirmada no Google Meu Negócio com {site.googleReviewCount}{" "}
                avaliações.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-ink-soft p-6 md:col-span-2">
              <p className="font-display text-lg font-semibold text-white">
                Confiança verificável
              </p>
              <p className="mt-3 text-white/70">
                Veja os depoimentos completos no perfil oficial da {site.name} no
                Google. As cinco melhores avaliações também podem ser destacadas
                aqui na página.
              </p>
            </div>
          </div>
        )}

        <a
          className="btn btn-outline mt-12"
          href={site.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  );
}
