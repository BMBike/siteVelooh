import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap from "../../../components/Zap";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Gancheiras4() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }} className={styles.gancheiraDiv}>
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
            titulo="SCOTT SPARK N°81"
            img="/images/produtos/gancheiras/0659.jpg"
          />
          <Produto2
            titulo="BMC TIME MACHINE N°82"
            img="/images/produtos/gancheiras/0660.jpg"
          />
          <Produto2
            titulo="SCOTT CR1 N°83"
            img="/images/produtos/gancheiras/0661.png"
          />
          <Produto2
            titulo="SPECIALIZED ALLEZ TARMAC S-WORKS N°84"
            img="/images/produtos/gancheiras/0662.jpg"
          />
          <Produto2
            titulo="ASTRO/GROOVE N°85"
            img="/images/produtos/gancheiras/0663.jpg"
          />
          <Produto2
            titulo="CANNONDALE ROAD N°86"
            img="/images/produtos/gancheiras/0664.jpg"
          />
          <Produto2
            titulo="BOMB/KONA/VZAN/BLUE/SUNDOW/
            RS2/EVEREST/CANOND/FIRSTEECH Nº87"
            img="/images/produtos/gancheiras/1382.jpg"
          />
          <Produto2
            titulo="OGGI 7.4/7.5/7.6BOOST Nº88"
            img="/images/produtos/gancheiras/1383.png"
          />
          <Produto2
            titulo="AUDAX100/101/200/300 2021 AUGE 600/700 2018 N°89"
            img="/images/produtos/gancheiras/1674.png"
          />
          <Produto2
            titulo="MONACO ZEUS S29 N°90"
            img="/images/produtos/gancheiras/1675.png"
          />
          <Produto2
            titulo="MTS M1/MONACO	N°91"
            img="/images/produtos/gancheiras/1676.png"
          />
          <Produto2
            titulo="AUDAX AUGE 555/600/	700 N°92"
            img="/images/produtos/gancheiras/1677.png"
          />
          <Produto2
            titulo="CALOI ELITE/EXPLORER/COMP N°93"
            img="/images/produtos/gancheiras/1436.png"
          />
          <Produto2
            titulo="ALFAMEC/CILT/TIRRENO ATX/ZT3 N°94"
            img="/images/produtos/gancheiras/1672.png"
          />
          <Produto2
            titulo="ORBEA ALMA CARBON 20 2014 Nº95"
            img="/images/produtos/gancheiras/1673.png"
          />
          <Produto2
            titulo="DECATHLON ROCK RIDER 8.1 Nº96"
            img="/images/produtos/gancheiras/1844.png"
          />

          <Produto2
            titulo="KALF S3 FUSION Nº97"
            img="/images/produtos/gancheiras/1845.png"
          />
          <Produto2
            titulo="GTS IVTEC Nº98"
            img="/images/produtos/gancheiras/1847.png"
          />
          <Produto2
            titulo="GTS RIDE 29-2020 Nº99"
            img="/images/produtos/gancheiras/1846.png"
          />
          <Produto2
            titulo="QUADRO SHELBY 2021 Nº100"
            img="/images/produtos/gancheiras/1971.jpg"
          />
          <Produto2
            titulo="GANCHEIRA DE EMERGENCIA PTO"
            img="/images/produtos/gancheiras/1437.png"
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
      <Zap />
      <Footer />
    </div>
  );
}
