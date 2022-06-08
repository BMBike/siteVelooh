import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";
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
          <Produto href="#" titulo="KIT REPARO FREIO HIDRÁULICO" img="/images/produtos/pecas/1690.jpg" />
          <Produto href="#" titulo="KIT SUPORTE TRANSBIKE" img="/images/produtos/pecas/0239(1).png" />
          <Produto href="#" titulo="MANGUEIRA P/ FREIO HIDRÁULICO" img="/images/produtos/pecas/0216.png" />
          <Produto href="#" titulo="MANIPULO P/TRANSBIKE" img="/images/produtos/pecas/0237.png" />
          <Produto href="#" titulo="MANOPLA BORRACHA" img="/images/produtos/pecas/0218.jpeg" />
          <Produto href="#" titulo="MANOPLA MTB" img="/images/produtos/pecas/1747.png" />
          <Produto href="#" titulo="MANOPLA SILICONE" img="/images/produtos/pecas/02211299.png" />
          <Produto href="#" titulo="OLIVA/PINO P/FREIO HIDRÁULICO" img="/images/produtos/pecas/0209(2).png" />
          <Produto href="#" titulo="PARAFUSO SUPORTE CARAMANHOLA" img="/images/produtos/pecas/1543.png" />
          <Produto href="#" titulo="PARALAMA DIANTEIRO MTB" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PARALAMA NYLON DIANT/TRAS C/SUP" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PARALAMA TRAS. PRATA" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PASTILHA DE FREIO" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PASTILHA M719" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PASTILHA M722" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PASTILHA M731" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PROLONGADOR ALUM UNIVERSAL" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PROLONGADOR" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="PROTETOR DE QUADRO" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="REPARO TUBELESS" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="ROLDANA CÂMBIO" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="SUPORTE DE GUIDÃO" img="/images/produtos/pecas/" />
          <Produto
            href="#"
            titulo="SUPORTE DE PAREDE HORIZONTAL C/SUPORTE"
            img=""
          />
          <Produto href="#" titulo="TIRAS SILICONE DE TRASNBIKE" img="" />
          <Produto href="#" titulo="VÁLVULA TUBELESS" img="" />
        </ProdutosPg>
        <div>
          <div className={styles.navdiv}>
            <Link href={"/produtos/pecas/1"}>
              <p className={styles.nav}>1</p>
            </Link>
            <Link href={"/produtos/pecas/2"}>
              <p className={styles.nav}>2</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <Zap2 />
    </div>
  );
}
