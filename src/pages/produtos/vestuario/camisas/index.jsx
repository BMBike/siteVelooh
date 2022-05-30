import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto3 from "../../../../components/Produto3";
export default function camisas() {
  return (
    <div style={{ backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="camisas">
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa de Corrida velooh" img="/images/produtos/vestuario/camisa/corrida.png"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Fem. Infantil Quasar"  img="/images/produtos/vestuario/camisa/feminfantquasarazul.png"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Fem. Classic Jet"  img="/images/produtos/vestuario/camisa/femclassicjetazul.jpg"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Fem. Gold"  img="/images/produtos/vestuario/camisa/femgoldazul.jpg"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Fem. Quasar"  img="/images/produtos/vestuario/camisa/femquasarazulrosa.png"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Masc. Infantil Wind"  img="/images/produtos/vestuario/camisa/mascinfantilwind.png"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Masc. Infantil Wind C/manga longa"  img="/images/produtos/vestuario/camisa/mascinfantilwindmangaazul.png"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Masc. Classic Jet"  img="/images/produtos/vestuario/camisa/masclassicjetazul.jpg"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Masculina Gold" img="/images/produtos/vestuario/camisa/mascgoldazul.jpeg"/>
      <Produto3 href="/produtos/vestuario/camisas" titulo="Camisa Masc. Wind" img="/images/produtos/vestuario/camisa/mascazulvd.png"/>
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
