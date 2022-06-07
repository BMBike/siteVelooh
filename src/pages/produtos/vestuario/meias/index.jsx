import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function meias() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="MEIAS">
        <Produto
          href="/produtos/vestuario/meias/elo"
          titulo="MEIA CICLISMO ELO"
          cor1="azulClaro"
          cor2="cinza"
          cor3="laranja"
          cor4="rosa"
          cor5="verdeclaro"
          img="/images/produtos/vestuario/meia/elocurtoazul.jpeg"
        />
        <Produto
          href="/produtos/vestuario/meias/quasar"
          titulo="MEIA CICLISMO QUASAR"
          cor1="azulrosa"
          cor2="azulrosa"
          cor3="rosrox"
          cor4="ptrosa"
          cor5="ptverdepiscina"
          img="/images/produtos/vestuario/meia/quasarazulrosa1.jpeg"
        />
        <Produto
          href="/produtos/vestuario/meias/wind"
          titulo="MEIA CICLISMO WIND"
          cor1="ptamarelo"
          cor2="ptverdepiscina"
          cor3="vermelhoroxo"
          cor4="azulverdepiscina"
          cor5="vermelho"
          img="/images/produtos/vestuario/meia/windazulvd.jpeg"
        />
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
