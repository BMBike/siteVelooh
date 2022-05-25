import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Gancheira.module.css";

export default function Gancheiras2() {
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
            titulo="CORRATEC CCT TEAM/CALOI SPEED CARDON/OGGI CADENZA N°56"
            img="/images/produtos/gancheiras/0146.jpg"
          />
          <Produto2
            titulo="GANCHEIRA DE EMERGENCIA PTO"
            img="/images/produtos/gancheiras/1437.png"
          />
          <Produto2
            titulo="DECATHLON ROCK RIDER 8.1 Nº96"
            img="/images/produtos/gancheiras/1844.png"
          />
          <Produto2
            titulo="ECOS/SOUTH LEGEND 29 N°02"
            img="/images/produtos/gancheiras/0147.jpg"
          />
          <Produto2
            titulo="FIRST SMITT N°66"
            img="/images/produtos/gancheiras/0644.jpg"
          />
          <Produto2
            titulo="FIRST WILLIX 800/900/910/KODE N°26"
            img="/images/produtos/gancheiras/0148.jpg"
          />
          <Produto2
            titulo="FOCUS WHISTLER N°76"
            img="/images/produtos/gancheiras/0654.jpg"
          />
          <Produto2
            titulo="FUJI/VENZO/VIPERHEIRA/VENZO VIPER N°41"
            img="/images/produtos/gancheiras/0149.jpg"
          />
          <Produto2
            titulo="GALLO/AZONIC/THREE HEADS N°10"
            img="/images/produtos/gancheiras/0150.jpg"
          />
          <Produto2
            titulo="GALLO/GTS M6/TRUST/CANNON N°06"
            img="/images/produtos/gancheiras/0151.jpg"
          />
          <Produto2
            titulo="GALOO PRO G/CALYPSO/FIB - N°68"
            img="/images/produtos/gancheiras/0646.png"
          />
          <Produto2
            titulo="GIANT ATX/TOTEM/ENVOY/TSW NEW HUNTER N°49"
            img="/images/produtos/gancheiras/0152.jpg"
          />
          <Produto2
            titulo="GT ZASKAR/GTI/VZAN/KHS N°50"
            img="/images/produtos/gancheiras/0153.jpg"
          />
          <Produto2
            titulo="GT ZASKAR/KARAKORAM AVALANCHE SPORT N°73"
            img="/images/produtos/gancheiras/0651.jpg"
          />
          <Produto2
            titulo="GTI/KHS/PROSHOCK/TRUST N°16"
            img="/images/produtos/gancheiras/0154.jpg"
          />
          <Produto2
            titulo="GTS IVTEC Nº98"
            img="/images/produtos/gancheiras/1847.png"
          />
          <Produto2
            titulo="GTS M1 INVERTIDA N°29"
            img="/images/produtos/gancheiras/0155.jpg"
          />
          <Produto2
            titulo="GTS M1 N°14"
            img="/images/produtos/gancheiras/0156.jpg"
          />
          <Produto2
            titulo="GTS M6/FIRST COMP/TSW/SOUL/KAPA/V2 20/21 N°34"
            img="/images/produtos/gancheiras/0157.jpg"
          />
          <Produto2
            titulo="GTS M7/GIOS/HIGH ONE/DABOMB/HUPI/VIKING/TSW N°08"
            img="/images/produtos/gancheiras/0158.jpg"
          />
          <Produto2
            titulo="GTS M7/VICINE/NINER/ROCKRIDER BIG8 N°46"
            img="/images/produtos/gancheiras/0159.jpg"
          />
          <Produto2
            titulo="GTS RIDE 29-2020 Nº99"
            img="/images/produtos/gancheiras/1846.png"
          />
          <Produto2
            titulo="HUPI/SOUL/FUJI/TSW N°11"
            img="/images/produtos/gancheiras/0160.jpg"
          />
          <Produto2
            titulo="KALF S3 FUSION Nº97"
            img="/images/produtos/gancheiras/1845.png"
          />
          <Produto2
            titulo="KHS/CUBE/TSW JUMP/HIGH ONE REVOLUTINO N°28"
            img="/images/produtos/gancheiras/0161.jpg"
          />

          <Produto2
            titulo="KSW/SOUTH/LOTUS EVER N°03"
            img="/images/produtos/gancheiras/0162.jpg"
          />
          <Produto2
            titulo="LAPIERRE/FIRST ATHYMUS/GONEW N°30"
            img="/images/produtos/gancheiras/0163.jpg"
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
