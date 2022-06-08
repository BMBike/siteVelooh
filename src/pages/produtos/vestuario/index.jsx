import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";

export default function indexVestuario() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg gap="150px" title="VESTUÁRIO">
        <Produto
          href="/produtos/vestuario/bandanas/"
          titulo="BANDANAS"
          img="/images/produtos/vestuario/bandana/elloazul.png"
        />
        <Produto
          href="/produtos/vestuario/bermudas/"
          titulo="BERMUDAS"
          img="/images/produtos/vestuario/bermuda/femforro.png"
        />
        <Produto
          href="/produtos/vestuario/calcas/"
          titulo="CALÇAS"
          img="/images/produtos/vestuario/calca/mascgel.png"
        />
        <Produto
          href="/produtos/vestuario/camisas/"
          titulo="CAMISAS"
          img="/images/produtos/vestuario/camisa/feminfantquasarazul.png"
        />
        <Produto
          href="/produtos/vestuario/luvas/"
          titulo="LUVAS"
          img="/images/produtos/vestuario/luva/azul.png"
        />
        <Produto
          href="/produtos/vestuario/manguitos/"
          titulo="MANGUITOS"
          img="/images/produtos/vestuario/manguito/quasarazul.png"
        />
        <Produto
          href="/produtos/vestuario/macaquinhos/"
          titulo="MACAQUINHOS"
          img="/images/produtos/vestuario/macaquinho/azulbb.png"
        />
        <Produto
          href="/produtos/vestuario/bretelle/"
          titulo="BRETELLE"
          img="/images/produtos/vestuario/bretelle/bretelle.png"
        />
        <Produto
          href="/produtos/vestuario/meias/"
          titulo="MEIAS"
          img="/images/produtos/vestuario/meia/elocurtoazul.jpeg"
        />
        {/*   <Produto href="/#" titulo="Bandana Ello "cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bandana Quasar"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bermuda Fem. Gel"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bermuda Fem. Infantil" cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bermuda Fem. forro" cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bermuda Masc. Gel "cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bermuda Masc. Infantil"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Bretelle Masc. Gel"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Calça fem. gel"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Calça masc. gel"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa de Corrida Velooh"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Fem. Inafantil Quasar"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Fem. Classic Jet"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Fem. Gold"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Fem. Quasar"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Masc. Infantil Wind"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa Masc. Infnatil Wind c/manga longa"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa masc. classic jet"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa masc. gold"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Camisa masc. wind"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Luva de mão dedo vazado"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Macaquinho Look fem. gel"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Macaquinho Look fem. manga/longa"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Macaquinho look fem."cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Manguito"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Manguito Quasar"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Meia cilismo elo cano curto"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="Meia ciclismo elo cano medio"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia ciclismo elo cano longo"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia quasar cano curto"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia quasar cano longo"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia quasar cano medio"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia wind cano curto"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia wind cano longo"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />
      <Produto href="/#" titulo="meia wind cano medio"cor1="" cor2="" cor3="" cor4="" cor5="" img="" />*/}
      </ProdutosPg>

      <Footer />
      <Zap2 />
    </div>
  );
}
