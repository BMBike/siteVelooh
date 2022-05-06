import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentIndex from "../components/ContentIndex";
import Zap from "../components/Zap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veloohh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="VWVrCKM274xpHD2m232Uzr4xC0pMCV_fXfD81wveTxw" />
        <link rel="icon" href="/images/icon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ContentIndex />
      <Footer />
      <Zap/>
    </div>
  );
}
