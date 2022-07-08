import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap from "../../../components/Zap";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Gancheiras2() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }} className={styles.gancheiraDiv} >
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
            titulo="VENZO X BLAZE/VICINITECH/TRUST N°27"
            img="/images/produtos/gancheiras/0195.jpg"
          />
        
          <Produto2
            titulo="KHS/CUBE/TSW JUMP/HIGH ONE REVOLUTINO N°28"
            img="/images/produtos/gancheiras/0161.jpg"
          />
          <Produto2
            titulo="GTS M1 INVERTIDA N°29"
            img="/images/produtos/gancheiras/0155.jpg"
          />

          <Produto2
            titulo="LAPIERRE/FIRST ATHYMUS/GONEW N°30"
            img="/images/produtos/gancheiras/0163.jpg"
          />

          <Produto2
            titulo="SOUL/TANDEM/KHS/CALOI/AUDAX N°31"
            img="/images/produtos/gancheiras/0190.jpg"
          />

          <Produto2
            titulo="SCOTT SCALE/SAPECT N°32"
            img="/images/produtos/gancheiras/0183.jpg"
          />
          <Produto2
            titulo="MOSSO 980XC/RAMPAGE N°33"
            img="/images/produtos/gancheiras/0168.jpg"
          />

          <Produto2
            titulo="GTS M6/FIRST COMP/TSW/SOUL/KAPA/V2 20/21 N°34"
            img="/images/produtos/gancheiras/0157.jpg"
          />

          <Produto2
            titulo="WNY XLT N°35"
            img="/images/produtos/gancheiras/0196.png"
          />
          <Produto2
            titulo="TSW FLY CARBON/AUDAX AUGE 20 CARDON  N°36"
            img="/images/produtos/gancheiras/0193.png"
          />
          <Produto2
            titulo="TREK/ROCKRIDER FR6 N°37"
            img="/images/produtos/gancheiras/0192.jpg"
          />
          <Produto2
            titulo="BH DOWNHILL/AUDAX AUGE 30/40 N°38"
            img="/images/produtos/gancheiras/0137.jpg"
          />

          <Produto2
            titulo="SOUL SL900/ GROOVE RIFF/KAPA M6 N°39"
            img="/images/produtos/gancheiras/0189.jpg"
          />
          <Produto2
            titulo="MERIDA/WHEELER N°40"
            img="/images/produtos/gancheiras/0164.jpg"
          />

          <Produto2
            titulo="FUJI/VENZO/VIPERHEIRA/VENZO VIPER N°41"
            img="/images/produtos/gancheiras/0149.jpg"
          />
          <Produto2
            titulo="MOB STAMINA 2014 WILIER/PINARELLO/3R2 SOUL/CORRATEC N°42"
            img="/images/produtos/gancheiras/0165.jpg"
          />
          <Produto2
            titulo="CALOI/FUJI/FOCUS/KHS/SOUL N°43"
            img="/images/produtos/gancheiras/0143.jpg"
          />
          <Produto2
            titulo="MONACO N°44"
            img="/images/produtos/gancheiras/0166.jpg"
          />
          <Produto2
            titulo="MONACO N°45"
            img="/images/produtos/gancheiras/0167.jpg"
          />
          <Produto2
            titulo="GTS M7/VICINE/NINER/ROCKRIDER BIG8 N°46"
            img="/images/produtos/gancheiras/0159.jpg"
          />
          <Produto2
            titulo="MOSSO SPRINT/PREMIUM/FUTURIS/AURORA N°47"
            img="/images/produtos/gancheiras/0169.jpg"
          />
          <Produto2
            titulo="ASTRO DEFENSE/GTS R3/CALOI SPRINT N°48"
            img="/images/produtos/gancheiras/0136.jpg"
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
            titulo="SENSE IMPULSE E-TRAIL 12MM N°51"
            img="/images/produtos/gancheiras/0187.jpg"
          />
          <Produto2
            titulo="OGGI 7.5 EIXO DE 12X180MM N°52"
            img="/images/produtos/gancheiras/0171.jpg"
          />
          <Produto2
            titulo="OGGI 7.5 EIXO DE 12X186MM 2019 N°53"
            img="/images/produtos/gancheiras/0172.jpg"
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
