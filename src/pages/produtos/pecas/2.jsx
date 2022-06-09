import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Pecas2() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProdutosPg title="PEÇAS">
          <Produto2
            href="#"
            titulo="KIT REPARO FREIO HIDRÁULICO OLEO MINERAL"
            img="/images/produtos/pecas/1690.jpg"
          />
          <Produto2
            href="#"
            titulo="KIT SUPORTE TRANSBIKE TIRA AZUL JET"
            img="/images/produtos/pecas/0239(1).png"
          />
          <Produto2
            href="#"
            titulo="MANGUEIRA P/ FREIO HIDRÁULICO TIPO SHIMANO 20M"
            img="/images/produtos/pecas/0216.png"
          />
          <Produto2
            href="#"
            titulo="MANIPULO(UNIDADE) P/TRANSBIKE"
            img="/images/produtos/pecas/0237.png"
          />
          <Produto
            cor1="preto"
            cor2="azulpt"
            cor3="preto"
            cor4="ptlaranja"
            cor5="ptrosa"
            cor6="ptverde"
            cor7="ptvermelho"
            cor8="ptazulclaro"
            cor9="ptamarelo"
            cor10="cinzapt"
            href="/produtos/pecas/manoplaborracha/"
            titulo="MANOPLA BORRACHA"
            img="/images/produtos/pecas/0218.jpeg"
          />
          <Produto
            cor1="azulClaro"
            cor2="rosa"
            cor3="preto"
            cor4="preto"
            cor5="preto"
            cor6="preto"
            cor7="preto"
            href="/produtos/pecas/manoplamtb/"
            titulo="MANOPLA MTB"
            img="/images/produtos/pecas/1047.png"
          />
          <Produto
            cor1="azulClaro"
            cor2="laranja"
            cor3="preto"
            cor4="vermelho"
            href="/produtos/pecas/manoplasilicone/"
            titulo="MANOPLA SILICONE"
            img="/images/produtos/pecas/02211299.png"
          />
          <Produto2
            href="#"
            titulo="OLIVA/PINO P/FREIO HIDRÁULICO"
            img="/images/produtos/pecas/0209(2).png"
          />
          <Produto2
            href="#"
            titulo="PARAFUSO SUPORTE CARAMANHOLA ZINC (PCT C/10)"
            img="/images/produtos/pecas/1543.png"
          />
          <Produto
            cor1="azulClaro"
            cor2="branco"
            cor3="laranja"
            cor4="polido"
            cor5="rosa"
            cor6="verde"
            cor7="vermelho"
            href="/produtos/pecas/paralamamtb/"
            titulo="PARALAMA DIANTEIRO MTB"
            img="/images/produtos/pecas/02071299.png"
          />
          <Produto2
            href="#"
            titulo="PARALAMA NYLON DIANT/TRAS C/SUP 20 A 29 PTO"
            img="/images/produtos/pecas/1955.jpg"
          />
          <Produto2
            href="#"
            titulo="PARALAMA TRAS. PRATA"
            img="/images/produtos/pecas/0807.png"
          />

          <Produto2
            href="#"
            titulo="PASTILHA M719"
            img="/images/produtos/pecas/1771.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA M722"
            img="/images/produtos/pecas/1772.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA M731"
            img="/images/produtos/pecas/1773.png"
          />
          <Produto2
            href="#"
            titulo="PROLONGADOR ALUM UNIVERSAL MTB/SPEED P/COG 50D"
            img="/images/produtos/pecas/1001.png"
          />
          <Produto2
            href="#"
            titulo="PROLONGADOR P/CÂMBIO SHIMANO 10/11V XT/XTR P/COG 50D "
            img="/images/produtos/pecas/1002.png"
          />
          <Produto2
            href="#"
            titulo="PROLONGADOR P/CÂMBIO SHIMANO 11V SLX/XT/XTR P/COG 50D"
            img="/images/produtos/pecas/1004.png"
          />
          <Produto2
            href="#"
            titulo="PROLONGADOR P/CAMBIO SRAM 10/11V P/COG 50D "
            img="/images/produtos/pecas/1003.png"
          />
          <Produto
            cor1="azulClaro"
            cor2="rosa"
            cor3="polido"
            href="/produtos/pecas/protetorquadro"
            titulo="PROTETOR DE QUADRO"
            img="/images/produtos/pecas/03261299.png"
          />
          <Produto2
            href="#"
            titulo="REPARO TUBELESS C/APLICADOR"
            img="/images/produtos/pecas/1912.jpg"
          />
          <Produto2
            href="#"
            titulo="ROLDANA CÂMBIO"
            img="/images/produtos/pecas/01009912.png"
          />
          <Produto2
            href="#"
            titulo="SUPORTE DE GUIDÃO"
            img="/images/produtos/pecas/0859(1).png"
          />
          <Produto2
            href="#"
            titulo="SUPORTE DE PAREDE HORIZONTAL C/SUPORTE"
            img="/images/produtos/pecas/0241.png"
          />
          <Produto2
            href="#"
            titulo="TIRAS SILICONE DE TRASNBIKE"
            img="/images/produtos/pecas/0236.png"
          />
          <Produto2
            href="#"
            titulo="VÁLVULA TUBELESS"
            img="/images/produtos/pecas/0107.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO GTS/ ZOOM/LTX (PAR) "
            img="/images/produtos/pecas/0873.png"
          />
  
          
        </ProdutosPg>
        <div>
          <div className={styles.navdiv}>
            <Link href={"/produtos/pecas/"}>
              <p className={styles.nav}>1</p>
            </Link>
            <Link href={"/produtos/pecas/2"}>
              <p className={styles.nav}>2</p>
            </Link>
            <Link href={"/produtos/pecas/3"}>
              <p className={styles.nav}>3</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <Zap2 />
    </div>
  );
}
