import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_E164 } from "./data/site";

export function whatsappUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
