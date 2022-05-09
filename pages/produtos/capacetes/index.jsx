import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";

export default function indexCap() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="CAPACETEES">
        <Produto href="/produtos/capacetes/capacete1" cor1="azulClaro" cor2="preto" cor3="vermelho" cor4="rosa" cor5="verde" img="/images/Capazul.jfif" />
        <Produto href="/produtos/capacetes/capacete1" cor1="azulClaro" cor2="preto" cor3="vermelho" cor4="rosa" cor5="verde" img="/images/Cappreto.jfif" />
        <Produto href="/produtos/capacetes/capacete1" cor1="azulClaro" cor2="preto" cor3="vermelho" cor4="rosa" cor5="verde" img="/images/Caprosa.jfif" />
        <Produto href="/produtos/capacetes/capacete1" cor1="azulClaro" cor2="preto" cor3="vermelho" cor4="rosa" cor5="verde" img="/images/Capverde.jfif" />
        <Produto href="/produtos/capacetes/capacete1" cor1="azulClaro" cor2="preto" cor3="vermelho" cor4="rosa" cor5="verde" img="/images/Capvermelho.jfif" />
      </ProdutosPg>

      <Footer />
      <Zap2 />
    </div>
  );
}
