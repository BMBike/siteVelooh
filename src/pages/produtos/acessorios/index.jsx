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
        <Produto
          href="/#"
          titulo="BOLSA DE QUADRO P/CELULAR"
          img="/images/produtos/acessorios/03279908.png"
        />
        <Produto
          href="/#"
          titulo="BOLSA DE QUADRO"
          img="/images/produtos/acessorios/1043.png"
        />
        <Produto
          href="/#"
          titulo="BOLSA DE SELIM AERO"
          img="/images/produtos/acessorios/0669.png"
        />
        <Produto
          href="/#"
          titulo="BOLSA DE SELIM MTB"
          img="/images/produtos/acessorios/0328(1).png"
        />
        <Produto
          href="/#"
          titulo="CARAMANHOLA 300ML BABY"
          img="/images/produtos/acessorios/12451224(1).png"
        />
        <Produto
          href="/#"
          titulo="CARAMANHOLA 500ML PRO"
          img="/images/produtos/acessorios/12463124.png"
        />
        <Produto
          href="/#"
          titulo="CARAMANHOLA ISOTERMICA 600ML"
          img="/images/produtos/acessorios/01971299(1).png"
        />
        <Produto
          href="/#"
          titulo="CARAMANHOLA TERMICA 700ML"
          img="/images/produtos/acessorios/07671299.png"
        />
        <Produto
          href="/#"
          titulo="CHAVE CANIVETE ALLEN 11 FUNÇÕES"
          img="/images/produtos/acessorios/0033.jfif"
        />
        <Produto
          href="/#"
          titulo="CHAVE CANIVETE ALLEN 7 FUNÇÕES"
          img="/images/produtos/acessorios/0243.png"
        />
        <Produto
          href="/#"
          titulo="CICLO COMPUTADOR COM FIO"
          img="/images/produtos/acessorios/0041.png"
        />
        <Produto
          href="/#"
          titulo="KIT EXPOSITOR CARAMANHOLA"
          img="/images/produtos/acessorios/0814.png"
        />
        <Produto
          href="/#"
          titulo="PORTA OBJETOS"
          img="/images/produtos/acessorios/0205.png"
        />
        <Produto
          href="/#"
          titulo="SUPORTE CARAMANHOLA"
          img="/images/produtos/acessorios/02031299.png"
        />
        <Produto
          href="/#"
          titulo="SUPORTE P/ CELULAR DE SILICONE"
          img="/images/produtos/acessorios/0103.jpeg"
        />
        <Produto
          href="/#"
          titulo="TRANSBIKES"
          img="/images/produtos/acessorios/0230.png"
        />
      </ProdutosPg>

      <Footer />
      <Zap2 />
    </div>
  );
}
