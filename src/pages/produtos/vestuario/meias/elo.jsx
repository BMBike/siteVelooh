import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import ContentMeia1 from "../../../../components/produtos/vestuario/meia/ContentMeia1";
import Zap from "../../../../components/Zap";
export default function meiaelo() {
  return (
    <div style={{ bbackgroundColor: "#f0f0f0" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ContentMeia1 />
      <Zap />
      <Footer />
    </div>
  );
}
