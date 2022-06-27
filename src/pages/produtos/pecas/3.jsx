import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Pecas3() {
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
            titulo="PASTILHA DE FREIO A DISCO MOD.WG (PAR)"
            img="/images/produtos/pecas/1945.jpg"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD ABSOLUTE/SHUNFENG (PAR)"
            img="/images/produtos/pecas/1041.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD DEORE SLX/XT (PAR)"
            img="/images/produtos/pecas/0612.jpg"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD GTS/PACO VMO COM MOLA (PAR)"
            img="/images/produtos/pecas/0616(1).png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD HEILAND/GTS/LTX/HIGH ONE (PAR)"
            img="/images/produtos/pecas/0617(1).png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD SPEED SHUNFENG"
            img="/images/produtos/pecas/1273.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD SRAM AVID BB8 (PAR)"
            img="/images/produtos/pecas/0613.jpg"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD SRAM/AVID/ELIXIR (PAR) "
            img="/images/produtos/pecas/0883.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO DISCO MOD SYPO (PEIXINHO) (PAR) "
            img="/images/produtos/pecas/0884.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO RACE/BENGAL (PAR)"
            img="/images/produtos/pecas/0887.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO SHUNFENG/ SAIGUAN/PROMAX (PAR) "
            img="/images/produtos/pecas/0885.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA DE FREIO ZOOM (PAR)"
            img="/images/produtos/pecas/0886.png"
          />
          <Produto2
            href="#"
            titulo="PASTILHA FREIO DISCO MOD DEORE SLX/XT/XTR M675/M785"
            img="/images/produtos/pecas/0615.jpg"
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
      <Zap2 />
      <Footer />
    </div>
  );
}
