import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ManoplaBorracha from "../../../components/produtos/pecas/ManoplaBorracha";
import Zap2 from "../../../components/Zap2";

export default function manoplaBorracha() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ManoplaBorracha />
      <Footer />
      <Zap2 />
    </div>
  );
}
