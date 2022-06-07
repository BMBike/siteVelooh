import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";

export default function indexAcessorios() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="ACESSÓRIOS">
      <Produto href="/#" titulo="BOLSA DE QUADRO P/CELULAR" img="/images/produtos/" />
      <Produto href="/#" titulo="BOLSA DE QUADRO" img="/images/produtos/" />
      <Produto href="/#" titulo="BOLSA DE SELIM AERO" img="/images/produtos/" />
      <Produto href="/#" titulo="BOLSA DE SELIM MTB" img="/images/produtos/" />
      <Produto href="/#" titulo="CARAMANHOLA 300ML BABY" img="/images/produtos/" />
      <Produto href="/#" titulo="CARAMANHOLA 500ML PRO" img="/images/produtos/" />
      <Produto href="/#" titulo="CARAMANHOLA ISOTERMICA 600ML" img="/images/produtos/" />
      <Produto href="/#" titulo="CARAMANHOLA TERMICA 700ML" img="/images/produtos/" />
      <Produto href="/#" titulo="CHAVE CANIVETE ALLEN 11 FUNÇÕES" img="/images/produtos/" />
      <Produto href="/#" titulo="CHAVE CANIVETE ALLEN 7 FUNÇÕES" img="/images/produtos/" />
      <Produto href="/#" titulo="CICLO COMPUTADOR COM FIO" img="/images/produtos/" />
      <Produto href="/#" titulo="KIT EXPOSITOR CARAMANHOLA" img="/images/produtos/" />
      <Produto href="/#" titulo="PORTA OBJETOS" img="/images/produtos/" />
      <Produto href="/#" titulo="SUPORTE CARAMANHOLA" img="/images/produtos/" />
      <Produto href="/#" titulo="SUPORTE P/ CELULAR DE SILICONE" img="/images/produtos/" />
      <Produto href="/#" titulo="TRANSBIKE" img="/images/produtos/" />

      </ProdutosPg>

      <Footer />
      <Zap2 />
    </div>
  );
}
