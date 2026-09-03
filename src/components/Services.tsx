import { services } from "../data/site";
import { ArrowIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";

export function Services() {
  return (
    <section id="servicos" className="bg-ink-soft">
      <div className="page-wrap py-16 md:py-20">
        <p className="section-kicker">Serviços</p>
        <div className="gold-line mt-4" />
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          Do diagnóstico ao aparelho funcionando — com padrão de qualidade.
        </h2>
      </div>

      <div>
        {services.map((service, index) => (
          <article
            key={service.id}
            className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[380px]">
              {/* PLACEHOLDER: Unsplash / mockup — substituir por foto real do serviço */}
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/25" />
            </div>
            <div
              className={`flex flex-col justify-center px-5 py-12 md:px-12 lg:px-16 ${
                index % 2 === 1 ? "bg-ink" : "bg-ink-soft"
              }`}
            >
              <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-md text-lg text-white/75">{service.text}</p>
              <a
                className="btn btn-gold mt-8 w-fit"
                href={whatsappUrl(service.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
