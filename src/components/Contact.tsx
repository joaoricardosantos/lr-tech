import { WhatsAppIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";
import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gold-glow opacity-70" />
      <div className="page-wrap relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="section-kicker">Contato</p>
          <div className="gold-line mt-4" />
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            Sem formulário. Orçamento direto no WhatsApp.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Envie o modelo do aparelho e o problema.
          </p>
          <a
            className="btn btn-gold mt-8"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
        <div className="rounded-2xl border border-gold/30 bg-ink-soft/80 p-8">
          <Logo className="mx-auto h-auto w-48 lg:w-64" />
        </div>
      </div>
    </section>
  );
}
