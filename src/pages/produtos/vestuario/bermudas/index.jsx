import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function bermudas() {
  return (
    <div style={{ backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="BERMUDAS">
        <Produto href="/produtos/vestuario/bermudas/femforro" titulo="BERMUDA FEM. FORRO" img="/images/produtos/vestuario/bermuda/femforro.png"/>
        <Produto href="/produtos/vestuario/bermudas/femgel" titulo="BERMUDA FEM. GEL"  img="/images/produtos/vestuario/bermuda/femgel.png"/>
        <Produto href="/produtos/vestuario/bermudas/feminfantil" titulo="BERMUDA FEM. INFANTIL" img="/images/produtos/vestuario/bermuda/feminfantil.png"/>
        <Produto href="/produtos/vestuario/bermudas/mascforro" titulo="BERMUDA MASC. FORRO"img="/images/produtos/vestuario/bermuda/mascforro.png"/>
        <Produto href="/produtos/vestuario/bermudas/mascgel" titulo="BERMUDA MASC. GEL" img="/images/produtos/vestuario/bermuda/mascgel.png"/>
        <Produto href="/produtos/vestuario/bermudas/mascinfantil" titulo="BERMUDA MASC. INFANTIL" img="/images/produtos/vestuario/bermuda/mascinfantil.png"/>
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
