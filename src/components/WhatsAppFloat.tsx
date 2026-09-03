import { WhatsAppIcon } from "../icons";
import { whatsappUrl } from "../whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-gold/50 bg-ink text-gold shadow-cta transition duration-200 hover:bg-gold hover:text-ink md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Abrir conversa no WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
