/**
 * Dados confirmados do Google Meu Negócio — LR'TECH (Natal/RN).
 *
 * Horário: quinta-feira 08:30–18:00 confirmado no Google Maps (fecha 18h).
 * Sábado: 08:00–16:00 via fonte secundária (locaisdobrasil) — validar no GMB.
 * Domingo: Fechado (fonte secundária).
 */

export const WHATSAPP_E164 = "5584987671450";
export const WHATSAPP_DISPLAY = "(84) 98767-1450";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de fazer um orçamento para meu aparelho.";

export const site = {
  name: "LR'TECH",
  brandShort: "LR TECH",
  niche: "Assistência técnica e reparo de celulares",
  city: "Natal",
  neighborhood: "Cidade da Esperança",
  addressLine: "Av. Paraíba, 114A",
  addressFull:
    "Av. Paraíba, 114A - Cidade da Esperança, Natal - RN, 59070-200",
  phoneDisplay: WHATSAPP_DISPLAY,
  googleRating: 5.0,
  googleReviewCount: 23,
  description: "Assistência Técnica Especializada.",
  instagram: "https://www.instagram.com/lrtech.rn/",
  instagramHandle: "@lrtech.rn",
  mapsEmbed:
    "https://www.google.com/maps?q=LR'TECH,+Av.+Para%C3%ADba,+114A+-+Cidade+da+Esperan%C3%A7a,+Natal+-+RN,+59070-200&hl=pt-BR&z=17&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/LR'TECH/@-5.8236037,-35.2372566,17z/data=!3m1!4b1!4m6!3m5!1s0x7b25553c9ef8753:0x671e109e4fea8bc3",
  reviewsUrl:
    "https://www.google.com/maps/place/LR'TECH/@-5.8236037,-35.2372566,17z/data=!4m8!3m7!1s0x7b25553c9ef8753:0x671e109e4fea8bc3!8m2!3d-5.8236037!4d-35.2372566!9m1!1b1",
  geo: {
    latitude: -5.8236037,
    longitude: -35.2372566,
  },
} as const;

/** Horários — seg–sex alinhados ao Google; sábado/domingo a validar. */
export const hours = [
  {
    days: "Segunda a sexta",
    range: "8h30 – 18h",
    weekday: [1, 2, 3, 4, 5],
    open: 8.5,
    close: 18,
  },
  {
    days: "Sábado",
    range: "8h – 16h",
    weekday: [6],
    open: 8,
    close: 16,
  },
  {
    days: "Domingo",
    range: "Fechado",
    weekday: [0],
    open: null,
    close: null,
  },
] as const;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#onde", label: "Onde estamos" },
] as const;

/**
 * PLACEHOLDER: fotos de banco (Unsplash), livres de direitos.
 * Substituir pelos arquivos reais da loja em /public/placeholders.
 * brand-mockup.jpg é material de identidade já fornecido pela marca.
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const photos = {
  brand: {
    src: asset("brand-mockup.jpg"),
    alt: "Identidade visual LR TECH aplicada em sacolas e cartão",
  },
  // PLACEHOLDER: preferir foto real da fachada quando disponível
  hero: {
    src: asset("placeholders/hero-brand.jpg"),
    alt: "Identidade visual LR TECH em ambiente de loja premium",
  },
  about: {
    src: asset("placeholders/about-bench.jpg"),
    alt: "Smartphone em bancada de assistência técnica",
  },
  screen: {
    src: asset("placeholders/service-screen.jpg"),
    alt: "Smartphone moderno — referência visual para troca de tela",
  },
  battery: {
    src: asset("placeholders/service-battery.jpg"),
    alt: "Power bank — referência visual para bateria e energia",
  },
  board: {
    src: asset("placeholders/service-board.jpg"),
    alt: "Circuito eletrônico — referência visual para reparo de placa",
  },
  accessories: {
    src: asset("placeholders/hero-repair.jpg"),
    alt: "Smartphone e notebook — referência visual para vendas e acessórios",
  },
} as const;

export const services = [
  {
    id: "tela",
    title: "Troca de tela",
    text: "Display original ou de alta qualidade, alinhamento preciso e teste completo antes da entrega. iPhone e Android.",
    image: photos.screen,
    message: "Olá! Vim pelo site e gostaria de um orçamento para troca de tela.",
  },
  {
    id: "bateria",
    title: "Bateria e energia",
    text: "Troca de bateria, diagnóstico de carga e correção de falhas de energia para o aparelho voltar a render o dia inteiro.",
    image: photos.battery,
    message: "Olá! Vim pelo site e gostaria de um orçamento para bateria/energia.",
  },
  {
    id: "placa",
    title: "Reparo de placa",
    text: "Microeletrônica com diagnóstico técnico: curto, oxidações, falhas de conectividade e recuperação avançada.",
    image: photos.board,
    message: "Olá! Vim pelo site e gostaria de um orçamento para reparo de placa.",
  },
  {
    id: "acessorios",
    title: "Smartphones e acessórios",
    text: "Vendas de aparelhos e acessórios selecionados — solução completa além do reparo.",
    image: photos.accessories,
    message: "Olá! Vim pelo site e gostaria de saber sobre smartphones e acessórios.",
  },
] as const;

/** Avaliações 5 estrelas do Google Meu Negócio (destaques). */
export const reviews = [
  {
    author: "Igor Luiz",
    rating: 5,
    quote:
      "Ótimo atendimento, profissionais capacitados pra resolver qualquer problema, tem vários acessórios, e funcionários muito simpáticos, principalmente o moreninho, atende bem demais...",
  },
  {
    author: "Victor Rocharde",
    rating: 5,
    quote: "Excelente atendimento, profissional honesto e preço justo.",
  },
  {
    author: "Vitória Silva",
    rating: 5,
    quote: "Ótimo atendimento, procedimentos de qualidade!",
  },
  {
    author: "Jackson Nobre",
    rating: 5,
    quote: "Um ótimo profissional, e foi super bem atendido.",
  },
  {
    author: "Binho Avelino",
    rating: 5,
    quote: "Resolveu meu problema de forma rápida e honesta. Atendimento diferenciado.",
  },
  {
    author: "Victoria Henrique",
    rating: 5,
    quote: "Trabalho de excelência, super indico!",
  },
] as const;

export const trustPoints = [
  { label: "5,0 no Google", detail: "23 avaliações" },
  { label: "Assistência especializada", detail: "iPhone e Android" },
  { label: "Orçamento rápido", detail: "via WhatsApp" },
] as const;
