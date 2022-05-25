import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Gancheira.module.css";

export default function Gancheiras4() {
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
        <ProdutosPg title="GANCHEIRAS">
          <Produto2
            titulo="SCOTT SCALE/SAPECT N°32"
            img="/images/produtos/gancheiras/0183.jpg"
          />
          <Produto2
            titulo="SCOTT SPARK N°75"
            img="/images/produtos/gancheiras/0653.jpg"
          />
          <Produto2
            titulo="SCOTT SPARK N°81"
            img="/images/produtos/gancheiras/0659.jpg"
          />
          <Produto2
            titulo="SENSE 8V EXTENDIDA N°25"
            img="/images/produtos/gancheiras/0184.jpg"
          />
          <Produto2
            titulo="SENSE 8V N°21"
            img="/images/produtos/gancheiras/0185.jpg"
          />
          <Produto2
            titulo="SENSE IMPACT SL/RACE N°23"
            img="/images/produtos/gancheiras/0186.jpg"
          />
          <Produto2
            titulo="SENSE IMPULSE E-TRAIL 12MM N°51"
            img="/images/produtos/gancheiras/0187.jpg"
          />
          <Produto2
            titulo="SENSE P/ UP GRADE LONGA Nº24"
            img="/images/produtos/gancheiras/0188.jpg"
          />
          <Produto2
            titulo="SOUL SL900/ GROOVE RIFF/KAPA M6 N°39"
            img="/images/produtos/gancheiras/0189.jpg"
          />
          <Produto2
            titulo="GANCHEIRA SOUL/TANDEM/KHS/CALOI/AUDAX N°31"
            img="/images/produtos/gancheiras/0190.jpg"
          />
          <Produto2
            titulo="SPECIALIZED ALLEZ TARMAC S-WORKS N°84"
            img="/images/produtos/gancheiras/0662.jpg"
          />
          <Produto2
            titulo="SPECIALIZED EPIC N°74"
            img="/images/produtos/gancheiras/0652.jpg"
          />
          <Produto2
            titulo="SPECIALIZED HARDROCK/ROCKOPPE/CARVE/MYRA Nº22"
            img="/images/produtos/gancheiras/0191.jpg"
          />
          <Produto2
            titulo="TREK N°67"
            img="/images/produtos/gancheiras/0645.jpg"
          />
          <Produto2
            titulo="TREK/ROCKRIDER FR6 N°37"
            img="/images/produtos/gancheiras/0192.jpg"
          />
          <Produto2
            titulo="TSW FLY CARBON/AUDAX AUGE 20 CARDON  N°36"
            img="/images/produtos/gancheiras/0193.png"
          />
          <Produto2
            titulo="VENZO RAPTO E VALENCIA/GIOS FRX/SENSE IMPACT N°05"
            img="/images/produtos/gancheiras/0194.jpg"
          />
          <Produto2
            titulo="VENZO X BLAZE/VICINITECH/TRUST N°27"
            img="/images/produtos/gancheiras/0195.jpg"
          />
          <Produto2
            titulo="WNY XLT N°35"
            img="/images/produtos/gancheiras/0196.png"
          />
          <Produto2
            titulo="KIT EXPOSITOR + GANCHEIRA "
            img="/images/produtos/gancheiras/0610.jpg"
          />
        </ProdutosPg>
        <div>
          <div className={styles.navdiv}>
            <Link href={"/produtos/gancheiras/1"}>
              <p className={styles.nav}>1</p>
            </Link>
            <Link href={"/produtos/gancheiras/2"}>
              <p className={styles.nav}>2</p>
            </Link>
            <Link href={"/produtos/gancheiras/3"}>
              <p className={styles.nav}>3</p>
            </Link>
            <Link href={"/produtos/gancheiras/4"}>
              <p className={styles.nav}>4</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Zap2 />
    </div>
  );
}
