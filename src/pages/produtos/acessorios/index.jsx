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
          href="/produtos/acessorios/bolsaquadrocel"
          titulo="BOLSA DE QUADRO P/CELULAR"
          img="/images/produtos/acessorios/03279908.png"
        />
        <Produto
          href="/produtos/acessorios/bolsaquadro"
          titulo="BOLSA DE QUADRO"
          img="/images/produtos/acessorios/1043.png"
        />
        <Produto
          href="/produtos/acessorios/bolsaselimaero"
          titulo="BOLSA DE SELIM AERO"
          img="/images/produtos/acessorios/0669.png"
        />
        <Produto
          href="/produtos/acessorios/bolsaselimmtb"
          titulo="BOLSA DE SELIM MTB"
          img="/images/produtos/acessorios/0328(1).png"
        />
        <Produto
          cor1="azulescuro"
          cor2="preto"
          cor3="rosa"
          cor4="verde"
          cor5="vermelho"
          href="/produtos/acessorios/caramanholababy"
          titulo="CARAMANHOLA 300ML BABY"
          img="/images/produtos/acessorios/12451224(1).png"
        />
        <Produto
          cor1="ptazul"
          cor2="ptcinza"
          cor3="ptrosa"
          cor4="ptverde"
          cor5="ptvermelho"
          cor6="brancopt"
          href="/produtos/acessorios/caramanhola500"
          titulo="CARAMANHOLA 500ML PRO"
          img="/images/produtos/acessorios/124619724.png"
        />
        <Produto
          cor1="azulClaro"
          cor2="rosa"
          cor3="preto"
          cor4="verdeclaro"
          cor5="vermelho"
          href="/produtos/acessorios/caramanhola600"
          titulo="CARAMANHOLA ISOTÉRMICA 600ML"
          img="/images/produtos/acessorios/01971299(1).png"
        />
        <Produto
          cor1="azulClaro"
          cor2="branco"
          cor3="preto"
          cor4="rosa"
          cor5="verde"
          cor6="vermelho"
          href="/produtos/acessorios/caramanhola700"
          titulo="CARAMANHOLA TÉRMICA 700ML"
          img="/images/produtos/acessorios/07671299.png"
        />
        <Produto
          href="/produtos/acessorios/chave11"
          titulo="CHAVE CANIVETE ALLEN 11 FUNÇÕES"
          img="/images/produtos/acessorios/0033.jfif"
        />
        <Produto
          href="/produtos/acessorios/chave7"
          titulo="CHAVE CANIVETE ALLEN 7 FUNÇÕES"
          img="/images/produtos/acessorios/0243.png"
        />
        <Produto
          href="/produtos/acessorios/ciclocomputador"
          titulo="CICLO COMPUTADOR COM FIO"
          img="/images/produtos/acessorios/0041.png"
        />
        <Produto
          href="/produtos/acessorios/expositorcaramanhola"
          titulo="KIT EXPOSITOR CARAMANHOLA"
          img="/images/produtos/acessorios/0814.png"
        />
        <Produto
          href="/produtos/acessorios/portaobjetos"
          titulo="PORTA OBJETOS"
          img="/images/produtos/acessorios/0205.png"
        />
        <Produto
          cor1="azulClaro"
          cor2="branco"
          cor3="grafite"
          cor4="laranja"
          cor5="lilas"
          cor6="preto"
          cor7="rosa"
          cor8="verdeclaro"
          cor9="vermelho"
          cor10="preto"
          href="/produtos/acessorios/suportecaramanhola"
          titulo="SUPORTE CARAMANHOLA"
          img="/images/produtos/acessorios/02031299.png"
        />
        <Produto
          href="/produtos/acessorios/suportecelular"
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
