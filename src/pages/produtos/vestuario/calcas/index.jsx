import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function calcas() {
  return (
    <div style={{ backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="CALÇAS">
        <Produto href="/produtos/vestuario/calcas/femgel" titulo="Calça Feminina Gel" img="/images/produtos/vestuario/calca/femgel.png"/>
        <Produto href="/produtos/vestuario/calcas/mascgel" titulo="Calça masculina gel"  img="/images/produtos/vestuario/calca/mascgel.png"/>
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
