import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap from "../../../components/Zap";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Gancheiras3() {
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
            titulo="OGGI VELLOCE N°54"
            img="/images/produtos/gancheiras/0182.jpg"
          />

          <Produto2
            titulo="OGGI BIG WHEEL 7.2/7.3/7.4 SOUL 929 N°55"
            img="/images/produtos/gancheiras/0178.jpg"
          />
          <Produto2
            titulo="CORRATEC CCT TEAM/CALOI SPEED CARDON/OGGI CADENZA N°56"
            img="/images/produtos/gancheiras/0146.jpg"
          />

          <Produto2
            titulo="CALOI EL CARB/RIDLEY/OGGI AGILE CARBON N°57"
            img="/images/produtos/gancheiras/0140.jpg"
          />

          <Produto2
            titulo="OGGI AGILE CARBON/CALOI CARDON RACING EIXO 12 MM N°58"
            img="/images/produtos/gancheiras/0173.jpg"
          />

          <Produto2
            titulo="CALOI VITUS 29 GROOV SKA/CALOI EL N°59"
            img="/images/produtos/gancheiras/0142.jpg"
          />

          <Produto2
            titulo="OGGI AGILE CARBON/CALOI CARDON RACING EIXO 9 MM  N°60"
            img="/images/produtos/gancheiras/0175.jpg"
          />

          <Produto2
            titulo="OGGI AGILE PRO/AUDAX AUGE 20 N°61"
            img="/images/produtos/gancheiras/0176.jpg"
          />

          <Produto2
            titulo="OGGI CATTURA N°62"
            img="/images/produtos/gancheiras/0179.jpg"
          />
          <Produto2
            titulo="OGGI AGILE SQUADA N°63"
            img="/images/produtos/gancheiras/0177.jpg"
          />
          <Produto2
            titulo="OGGI AGILE CARBON/CALOI RACING EIXO 12 MM  N°64"
            img="/images/produtos/gancheiras/0174.jpg"
          />

          <Produto2
            titulo="CALOI EL CARBON OGGI AGILE CARBON N°65"
            img="/images/produtos/gancheiras/0141.jpg"
          />
          <Produto2
            titulo="FIRST SMITT N°66"
            img="/images/produtos/gancheiras/0644.jpg"
          />
          <Produto2
            titulo="TREK N°67"
            img="/images/produtos/gancheiras/0645.jpg"
          />
          <Produto2
            titulo="GALOO PRO G/CALYPSO/FIB - N°68"
            img="/images/produtos/gancheiras/0646.png"
          />
          <Produto2
            titulo="PINARELLO/FUJI/RC/ JAMIS/TRUST - 18MM N°69"
            img="/images/produtos/gancheiras/0647.jpg"
          />
          <Produto2
            titulo="CALOI STRADA RACING N°70 "
            img="/images/produtos/gancheiras/0648.jpg"
          />

          <Produto2
            titulo="CALOI ELITE FS N°71"
            img="/images/produtos/gancheiras/0649.jpg"
          />
          <Produto2
            titulo="PINARELLO 22MM N°72"
            img="/images/produtos/gancheiras/0650.jpg"
          />

          <Produto2
            titulo="GT ZASKAR/KARAKORAM AVALANCHE SPORT N°73"
            img="/images/produtos/gancheiras/0651.jpg"
          />
          <Produto2
            titulo="SPECIALIZED EPIC N°74"
            img="/images/produtos/gancheiras/0652.jpg"
          />
          <Produto2
            titulo="SCOTT SPARK N°75"
            img="/images/produtos/gancheiras/0653.jpg"
          />
          <Produto2
            titulo="FOCUS WHISTLER N°76"
            img="/images/produtos/gancheiras/0654.jpg"
          />

          <Produto2
            titulo="SCOTT N°77"
            img="/images/produtos/gancheiras/0655.jpg"
          />
          <Produto2
            titulo="CANNONDALE SCALPEL SI 142 KP432 N°78"
            img="/images/produtos/gancheiras/0656.jpg"
          />
          <Produto2
            titulo="CANNONDALE FLASH/FSI N°79"
            img="/images/produtos/gancheiras/0657.jpg"
          />

          <Produto2
            titulo="CALOI STRADA N°80"
            img="/images/produtos/gancheiras/0658.jpg"
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
