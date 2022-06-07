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
            titulo="ALFAMEC/CILT/TIRRENO ATX/ZT3 N°94"
            img="/images/produtos/gancheiras/1672.png"
          />
          <Produto2
            titulo="ALFAMEC/WNY KAIROS XKS N°01"
            img="/images/produtos/gancheiras/0132.jpeg"
          />
          <Produto2
            titulo="ALFAMEQ STROLL N°09"
            img="/images/produtos/gancheiras/0133.jpg"
          />
          <Produto2
            titulo="ALFAMEQ/CANADIAN N°15"
            img="/images/produtos/gancheiras/0134.jpg"
          />
          <Produto2
            titulo="ALFAMEQ/CANADIAN X-TERRA N°17"
            img="/images/produtos/gancheiras/0135.jpg"
          />
          <Produto2
            titulo="ASTRO/GROOVE N°85"
            img="/images/produtos/gancheiras/0663.jpg"
          />
          <Produto2
            titulo="ASTRO DEFENSE/GTS R3/CALOI SPRINT N°48"
            img="/images/produtos/gancheiras/0136.jpg"
          />
          <Produto2
            titulo="AUDAX AUGE 555/600/ 700 N°92"
            img="/images/produtos/gancheiras/1677.png"
          />
          <Produto2
            titulo="AUDAX100/101/200/300 2021 AUGE 600/700 2018 N°89"
            img="/images/produtos/gancheiras/1674.png"
          />
          <Produto2
            titulo="BH DOWNHILL/AUDAX AUGE 30/40 N°38"
            img="/images/produtos/gancheiras/0137.jpg"
          />
          <Produto2
            titulo="BMC TIME MACHINE N°82"
            img="/images/produtos/gancheiras/0660.jpg"
          />
          <Produto2
            titulo="CALOI EL 10/20/KODE CORRATEC SUPERBOW N°12"
            img="/images/produtos/gancheiras/0138.jpg"
          />
          <Produto2
            titulo="CALOI EL 30/CORRATE X-VERT/FIRST/SENSE N°18"
            img="/images/produtos/gancheiras/0139.jpg"
          />
          <Produto2
            titulo="CALOI EL CARB/RIDLEY/OGGI AGILE CARBON N°57"
            img="/images/produtos/gancheiras/0140.jpg"
          />
          <Produto2
            titulo="CALOI EL CARBON OGGI AGILE CARBON N°65"
            img="/images/produtos/gancheiras/0141.jpg"
          />
          <Produto2
            titulo="CALOI ELITE FS N°71"
            img="/images/produtos/gancheiras/0649.jpg"
          />
          <Produto2
            titulo="CALOI ELITE/EXPLORER/COMP N°93"
            img="/images/produtos/gancheiras/1436.png"
          />
          <Produto2
            titulo="CALOI STRADA N°80"
            img="/images/produtos/gancheiras/0658.jpg"
          />
          <Produto2
            titulo="CALOI STRADA RACING N°70 "
            img="/images/produtos/gancheiras/0648.jpg"
          />
          <Produto2
            titulo="CALOI VITUS 29 GROOV SKA/CALOI EL N°59"
            img="/images/produtos/gancheiras/0142.jpg"
          />
          <Produto2
            titulo="CALOI/FUJI/FOCUS/KHS/SOUL N°43"
            img="/images/produtos/gancheiras/0143.jpg"
          />
          <Produto2
            titulo="CALOI/H.ONE/VENZO/GTA/GTS M3/TSW RIDE/TOTEM/FUJI N°07"
            img="/images/produtos/gancheiras/0144.jpg"
          />
          <Produto2
            titulo="CANNODALE N°04"
            img="/images/produtos/gancheiras/0145.jpg"
          />
          <Produto2
            titulo="CANNONDALE FLASH/FSI N°79"
            img="/images/produtos/gancheiras/0657.jpg"
          />
          <Produto2
            titulo="CANNONDALE ROAD N°86"
            img="/images/produtos/gancheiras/0664.jpg"
          />
          <Produto2
            titulo="CANNONDALE SCALPEL SI 142 KP432 N°78"
            img="/images/produtos/gancheiras/0656.jpg"
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
