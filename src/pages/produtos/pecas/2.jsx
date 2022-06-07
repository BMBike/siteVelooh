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
          <Produto href="#" titulo="KIT REPARO FREIO HIDRÁULICO" img="" />
          <Produto href="#" titulo="KIT SUPORTE TRANSBIKE" img="" />
          <Produto href="#" titulo="MANGUEIRA P/ FREIO HIDRÁULICO" img="" />
          <Produto href="#" titulo="MANIPULO P/TRANSBIKE" img="" />
          <Produto href="#" titulo="MANOPLA BORRACHA" img="" />
          <Produto href="#" titulo="OLIVIA/PINO P/FREIO HIDRÁULICO" img="" />
          <Produto href="#" titulo="PARAFUSO SUPORTE CARAMANHOLA" img="" />
          <Produto href="#" titulo="PARALAMAS" img="" />
          <Produto href="#" titulo="PASTILHA DE FREIO" img="" />
          <Produto href="#" titulo="PASTILHA M719" img="" />
          <Produto href="#" titulo="PASTILHA M722" img="" />
          <Produto href="#" titulo="PASTILHA M731" img="" />
          <Produto href="#" titulo="PROLONGADOR ALUM UNIVERSAL" img="" />
          <Produto href="#" titulo="PROLONGADOR" img="" />
          <Produto href="#" titulo="PROTETOR DE QUADRO" img="" />
          <Produto href="#" titulo="REPARO TUBELESS" img="" />
          <Produto href="#" titulo="ROLDANA CÂMBIO" img="" />
          <Produto href="#" titulo="SUPORTE DE GUIDÃO" img="" />
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
