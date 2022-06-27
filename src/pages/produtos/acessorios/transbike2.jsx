import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Transbike2 from "../../../components/produtos/acessorios/Transbike2";
import Zap2 from "../../../components/Zap2";

export default function transbike2() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Transbike2 />
      <Zap2 />
      <Footer />
    </div>
  );
}
