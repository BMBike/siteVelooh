import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Zap from "../../components/Zap";
import ContentPecas from "../../components/produtos/ContentPecas";

export default function pecasBike() {
  return (
    <div>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ContentPecas />
      <Footer />
      <Zap />
    </div>
  );
}
