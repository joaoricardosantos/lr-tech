import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[100svh] flex-col items-center justify-center bg-ink px-5 pt-28 text-center">
        <Logo className="h-auto w-48 md:w-64" />
        <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          404
        </p>
        <h1 className="mt-3 max-w-lg font-display text-4xl font-bold text-white md:text-5xl">
          Página não encontrada.
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/70">
          Esse endereço não existe — mas a assistência na Av. Paraíba, sim.
        </p>
        <Link to="/" className="btn btn-gold mt-8">
          Voltar para o início
        </Link>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
