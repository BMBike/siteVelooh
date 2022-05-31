import Head from "next/head";
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer";
import ContentCamisa10 from "../../../../components/produtos/vestuario/camisas/ContentCamisa10";
import Zap2 from "../../../../components/Zap2";
export default function Camisa10() {
  return (
    <div style={{backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ContentCamisa10/>
      <Footer />
      <Zap2 />
    </div>
  );
}