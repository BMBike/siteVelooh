import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Gancheiras1() {
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
            titulo="EXPOSITOR GANCHEIRA"
            img="/images/produtos/gancheiras/expositor.jpg"
          />
          <Produto2
            titulo="ALFAMEC/WNY KAIROS XKS N°01"
            img="/images/produtos/gancheiras/0132.jpeg"
          />
          <Produto2
            titulo="ECOS/SOUTH LEGEND 29 N°02"
            img="/images/produtos/gancheiras/0147.jpg"
          />
          <Produto2
            titulo="KSW/SOUTH/LOTUS EVER N°03"
            img="/images/produtos/gancheiras/0162.jpg"
          />
          <Produto2
            titulo="CANNODALE N°04"
            img="/images/produtos/gancheiras/0145.jpg"
          />
          <Produto2
            titulo="VENZO RAPTO E VALENCIA/GIOS FRX/SENSE IMPACT N°05"
            img="/images/produtos/gancheiras/0194.jpg"
          />
          <Produto2
            titulo="GALLO/GTS M6/TRUST/CANNON N°06"
            img="/images/produtos/gancheiras/0151.jpg"
          />
          <Produto2
            titulo="CALOI/H.ONE/VENZO/GTA/GTS M3/TSW RIDE/TOTEM/FUJI N°07"
            img="/images/produtos/gancheiras/0144.jpg"
          />
          <Produto2
            titulo="GTS M7/GIOS/HIGH ONE/DABOMB/HUPI/VIKING/TSW N°08"
            img="/images/produtos/gancheiras/0158.jpg"
          />

          <Produto2
            titulo="ALFAMEQ STROLL N°09"
            img="/images/produtos/gancheiras/0133.jpg"
          />
          <Produto2
            titulo="GALLO/AZONIC/THREE HEADS N°10"
            img="/images/produtos/gancheiras/0150.jpg"
          />
          <Produto2
            titulo="HUPI/SOUL/FUJI/TSW N°11"
            img="/images/produtos/gancheiras/0160.jpg"
          />
          <Produto2
            titulo="CALOI EL 10/20/KODE CORRATEC SUPERBOW N°12"
            img="/images/produtos/gancheiras/0138.jpg"
          />
          <Produto2
            titulo="MOSSO/DA BOMB FIRST LUNIX N°13"
            img="/images/produtos/gancheiras/0170.jpg"
          />
          <Produto2
            titulo="GTS M1 N°14"
            img="/images/produtos/gancheiras/0156.jpg"
          />
          <Produto2
            titulo="ALFAMEQ/CANADIAN N°15"
            img="/images/produtos/gancheiras/0134.jpg"
          />
          <Produto2
            titulo="GTI/KHS/PROSHOCK/TRUST N°16"
            img="/images/produtos/gancheiras/0154.jpg"
          />
          <Produto2
            titulo="ALFAMEQ/CANADIAN X-TERRA N°17"
            img="/images/produtos/gancheiras/0135.jpg"
          />
          <Produto2
            titulo="CALOI EL 30/CORRATE X-VERT/FIRST/SENSE N°18"
            img="/images/produtos/gancheiras/0139.jpg"
          />
          <Produto2
            titulo="OGGI FLOAT/EVER GTI N°19"
            img="/images/produtos/gancheiras/0180.jpg"
          />
          <Produto2
            titulo="OGGI HACKER N°20"
            img="/images/produtos/gancheiras/0181.jpg"
          />
          <Produto2
            titulo="SENSE 8V N°21"
            img="/images/produtos/gancheiras/0185.jpg"
          />

          <Produto2
            titulo="SPECIALIZED HARDROCK/ROCKOPPE/CARVE/MYRA Nº22"
            img="/images/produtos/gancheiras/0191.jpg"
          />
          <Produto2
            titulo="SENSE IMPACT SL/RACE N°23"
            img="/images/produtos/gancheiras/0186.jpg"
          />
              <Produto2
            titulo="SENSE P/ UP GRADE LONGA Nº24"
            img="/images/produtos/gancheiras/0188.jpg"
          />
          <Produto2
            titulo="SENSE 8V EXTENDIDA N°25"
            img="/images/produtos/gancheiras/0184.jpg"
          />
          <Produto2
            titulo="FIRST WILLIX 800/900/910/KODE N°26"
            img="/images/produtos/gancheiras/0148.jpg"
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
      <Zap2 />
      <Footer />
    </div>
  );
}
