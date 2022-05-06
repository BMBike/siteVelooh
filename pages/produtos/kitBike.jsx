import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Zap2 from "../../components/Zap2";
import ContentKit from "../../components/produtos/ContentKit";

export default function kitBike() {
  return (
    <div>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ContentKit />
      <Footer />
      <Zap2 />
    </div>
  );
}
