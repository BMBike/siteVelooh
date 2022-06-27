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
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="CAPACETES">
        <Produto
          href="/produtos/capacetes/baby"
          titulo="BABY"
          cor1="azulClaro"
          cor2="preto"
          cor3="laranja"
          cor4="rosa"
          cor5="verde"
          cor6="rosa"
          cor7="azulClaro"
          cor8="vermelho"
          cor9="rosa"
          cor10="roxo"
          img="/images/produtos/capacetes/capacete1/Capazul.jfif"
        />
        <Produto
          href="/produtos/capacetes/kids"
          titulo="KIDS"
          cor1="ptazulclaro"
          cor2="ptcinza"
          cor3="ptrosa"
          cor4="ptverde"
          cor5="ptvermelho"
          cor6="rosa"
          cor7="verdeclaro"
          cor8="rosa"
          img="/images/produtos/capacetes/kids/03091299.png"
        />
        <Produto
          href="/produtos/capacetes/capmtb"
          titulo="MTB LINE (CORES SÓLIDAS)"
          cor1="azulClaro"
          cor2="rosa"
          cor3="vermelho"
          img="/images/produtos/capacetes/capmtb/azul.png"
        />
        <Produto
          href="/produtos/capacetes/mtbtext"
          titulo="MTB LINE (TEXTURA)"
          cor1="azulpt"
          cor2="brancorosa"
          cor3="cinzapt"
          cor4="brancopt"
          cor5="ptcinza"
          cor6="ptrosa"
          cor7="ptverde"
          cor8="ptvermelho"
          img="/images/produtos/capacetes/mtbtext/azulpt.png"
        />
      </ProdutosPg>
      <Zap2 />
      <Footer />
    </div>
  );
}
