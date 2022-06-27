import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto2 from "../../../components/Produto2";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Gancheiras3() {
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
            titulo="MERIDA/WHEELER N°40"
            img="/images/produtos/gancheiras/0164.jpg"
          />
          <Produto2
            titulo="MOB STAMINA 2014 WILIER/PINARELLO/3R2 SOUL/CORRATEC N°42"
            img="/images/produtos/gancheiras/0165.jpg"
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
            titulo="MONACO ZEUS S29 N°90"
            img="/images/produtos/gancheiras/1675.png"
          />
          <Produto2
            titulo="MOSSO 980XC/RAMPAGE N°33"
            img="/images/produtos/gancheiras/0168.jpg"
          />
          <Produto2
            titulo="MOSSO SPRINT/PREMIUM/FUTURIS/AURORA N°47"
            img="/images/produtos/gancheiras/0169.jpg"
          />
          <Produto2
            titulo="MOSSO/DA BOMB FIRST LUNIX N°13"
            img="/images/produtos/gancheiras/0170.jpg"
          />
          <Produto2
            titulo="MTS M1/MONACO N°91"
            img="/images/produtos/gancheiras/1676.png"
          />
          <Produto2
            titulo="OGGI 7.4/7.5/7.6BOOST Nº88"
            img="/images/produtos/gancheiras/1383.png"
          />
          <Produto2
            titulo="OGGI 7.5 EIXO DE 12X180MM N°52"
            img="/images/produtos/gancheiras/0171.jpg"
          />
          <Produto2
            titulo="GANCHEIRA OGGI 7.5 EIXO DE 12X186MM 2019 N°53"
            img="/images/produtos/gancheiras/0172.jpg"
          />
          <Produto2
            titulo="OGGI AGILE CARBON/CALOI CARDON RACING EIXO 12 MM N°58"
            img="/images/produtos/gancheiras/0173.jpg"
          />
          <Produto2
            titulo="OGGI AGILE CARBON/CALOI CARDON RACING EIXO 9 MM  N°60"
            img="/images/produtos/gancheiras/0175.jpg"
          />
          <Produto2
            titulo="OGGI AGILE CARBON/CALOI RACING EIXO 12 MM  N°64"
            img="/images/produtos/gancheiras/0174.jpg"
          />
          <Produto2
            titulo="OGGI AGILE PRO/AUDAX AUGE 20 N°61"
            img="/images/produtos/gancheiras/0176.jpg"
          />
          <Produto2
            titulo="OGGI AGILE SQUADA N°63"
            img="/images/produtos/gancheiras/0177.jpg"
          />
          <Produto2
            titulo="OGGI BIG WHEEL 7.2/7.3/7.4 SOUL 929 N°55"
            img="/images/produtos/gancheiras/0178.jpg"
          />
          <Produto2
            titulo="OGGI CATTURA N°62"
            img="/images/produtos/gancheiras/0179.jpg"
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
            titulo="OGGI VELLOCE N°54"
            img="/images/produtos/gancheiras/0182.jpg"
          />
          <Produto2
            titulo="ORBEA ALMA CARBON 20 2014 Nº95"
            img="/images/produtos/gancheiras/1673.png"
          />
          <Produto2
            titulo="PINARELLO 22MM N°72"
            img="/images/produtos/gancheiras/0650.jpg"
          />
          <Produto2
            titulo="PINARELLO/FUJI/RC/ JAMIS/TRUST - 18MM N°69"
            img="/images/produtos/gancheiras/0647.jpg"
          />
          <Produto2
            titulo="SCOTT CR1 N°83"
            img="/images/produtos/gancheiras/0661.png"
          />
          <Produto2
            titulo="SCOTT N°77"
            img="/images/produtos/gancheiras/0655.jpg"
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
