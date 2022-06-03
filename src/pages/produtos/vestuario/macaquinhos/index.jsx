import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap2 from "../../../../components/Zap2";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function macaquinhos() {
  return (
    <div style={{ backgroundColor: "#2d2d2d"}}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="MACAQUINHOS">
      <Produto href="/produtos/vestuario/macaquinhos/look" titulo="MACAQUINHO LOOK FEM." cor1="azulbb" cor2="amarelo" cor3="salmao" cor4="verdeclaro" cor5="vermelho" cor6="azulrosa" cor7="ptvermelho" cor8="roxo" img="/images/produtos/vestuario/macaquinhos/azulbb.png"/>
      <Produto href="/produtos/vestuario/macaquinhos/lookmanga" titulo="MACAQUINHO LOOK FEM. M/LONGA" cor1="ptazulclaro" cor2="rosa" cor3="cinza" img="/images/produtos/vestuario/macaquinhos/azulptlonga.png"/>
      </ProdutosPg>
      <Footer />
      <Zap2 />
    </div>
  );
}
