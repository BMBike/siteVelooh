import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentIndex from "../components/ContentIndex";
import Zap from "../components/Zap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ContentIndex />
      <Footer />
      <Zap/>
    </div>
  );
}
