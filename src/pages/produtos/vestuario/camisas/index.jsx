import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";
export default function camisas() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="CAMISAS">
        <Produto
          href="/produtos/vestuario/camisas/corrida"
          titulo="CAMISA DE CORRIDA VELOOH"
          img="/images/produtos/vestuario/camisa/corrida.png"
        />
        <Produto
          href="/produtos/vestuario/camisas/feminfquasar"
          titulo="CAMISA FEM. INFANTIL QUASAR"
          cor1="azulClaro"
          cor2="azulrosa"
          cor3="rosrox"
          cor4="cinzarosa"
          cor5="verdepiscinarosa"
          img="/images/produtos/vestuario/camisa/feminfantquasarazul.png"
        />
        <Produto
          href="/produtos/vestuario/camisas/femclassicjet"
          titulo="CAMISA FEM. CLASSIC JET"
          cor1="ptazul"
          cor2="ptazulclaro"
          cor3="ptpink"
          cor4="ptrosa"
          cor5="ptroxo"
          img="/images/produtos/vestuario/camisa/femclassicjetazul.jpg"
        />
        <Produto
          href="/produtos/vestuario/camisas/femgold"
          titulo="CAMISA FEM. GOLD"
          cor1="borealazul"
          cor2="ptverderosa"
          cor3="ptrosrox"
          cor4="verderosrox"
          cor5="ptrosrox"
          cor6="ptcolorido"
          cor7="azulrosa"
          cor8="verdepiscina"
          img="/images/produtos/vestuario/camisa/femgoldazul.jpg"
        />
        <Produto
          href="/produtos/vestuario/camisas/femquasar"
          titulo="CAMISA FEM. QUASAR"
          cor1="azulrosa"
          cor2="azulClaro"
          cor3="cinzarosa"
          cor4="verdepiscinarosa"
          img="/images/produtos/vestuario/camisa/femquasarazulrosa.png"
        />
        <Produto
          href="/produtos/vestuario/camisas/mascinfwind"
          titulo="CAMISA MASC. INFANTIL WIND"
          img="/images/produtos/vestuario/camisa/mascinfantilwind.png"
          cor1="azulverdepiscina"
          cor2="ptverdepiscina"
          cor3="azulvermelho"
          cor4="ptamarelo"
          cor5="vermelho"
        />
        <Produto
          href="/produtos/vestuario/camisas/mascwindmanga"
          titulo="CAMISA MASC. WIND C/MANGA LONGA"
          img="/images/produtos/vestuario/camisa/mascinfantilwindmangaazul.png"
          cor1="azulverde"
          cor2="cinza"
          cor3="ptazul"
          cor4="ptverde"
          cor5="ptamarelo"
        />
        <Produto
          href="/produtos/vestuario/camisas/mascclassicjet"
          titulo="CAMISA MASC. CLASSIC JET"
          img="/images/produtos/vestuario/camisa/masclassicjetazul.jpg"
          cor1="ptazul"
          cor2="ptamarelo"
          cor3="ptcinza"
          cor4="ptlaranja"
          cor5="ptvermelho"
        />
        <Produto
          href="/produtos/vestuario/camisas/mascgold"
          titulo="CAMISA MASCULINA GOLD"
          img="/images/produtos/vestuario/camisa/mascgoldazul.jpeg"
          cor1="azulClaro"
          cor2="azulescuro"
          cor3="azulverde"
          cor4="ptverdepiscina"
          cor5="ptazul"
          cor6="azullaranja"
          cor7="ptcinza"
          cor8="ptbrancovermelho"
          cor9="ptverde"
          cor10="ptcinza"
        />
        <Produto
          href="/produtos/vestuario/camisas/mascwind"
          titulo="CAMISA MASC. WIND"
          img="/images/produtos/vestuario/camisa/mascazulvd.png"
          cor1="ptverdepiscina"
          cor2="azulverdepiscina"
        />
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
