import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";

export default function indexAros() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="AROS">
      <Produto href="/produtos/aros/aroaero" titulo="aero" cor1="azulescuro" cor2="branco" cor3="polido" cor4="preto" cor5="rosaclaro" img="/images/produtos/aros/aero/azul.png" />
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
