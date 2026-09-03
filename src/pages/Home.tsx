import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { JsonLd } from "../components/JsonLd";
import { Location } from "../components/Location";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";
import { TrustBar } from "../components/TrustBar";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export function Home() {
  return (
    <>
      <JsonLd />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
