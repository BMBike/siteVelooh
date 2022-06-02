import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";
export default function manguitos() {
  return (
    <div style={{ backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="MANGUITOS">
      <Produto href="/produtos/vestuario/manguitos/preto" titulo="MANGUITO PRETO C/DETATLHE" cor1="azulClaro" cor2="rosa" cor3="polido" img="/images/produtos/vestuario/manguito/ptazul.png"/>
      <Produto href="/produtos/vestuario/manguitos/quasar" titulo="MANGUITO QUASAR" cor1="azulClaro" cor2="azulrosa" cor3="azulrosa" cor4="rosrox" cor5="ptrosa" cor6="ptverdepiscina" img="/images/produtos/vestuario/manguito/quasarazul.png"/>
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
