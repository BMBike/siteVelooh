import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BolsaSelimAero from "../../../components/produtos/acessorios/BolsaSelimAero";
import Zap2 from "../../../components/Zap2";

export default function bolsaselimaero() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <BolsaSelimAero />
      <Zap2 />
      <Footer />
    </div>
  );
}
