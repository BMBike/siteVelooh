import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import ContentCortaVento from "../../../../components/produtos/vestuario/cortavento/ContentCortaVento";
import Zap from "../../../../components/Zap";
export default function cortavento() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ContentCortaVento />
      <Zap />
      <Footer />
    </div>
  );
}
