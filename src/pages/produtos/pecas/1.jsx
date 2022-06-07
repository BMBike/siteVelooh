import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";
import Link from "next/link";
import styles from "../../../styles/produtos/Paginator.module.css";

export default function Pecas1() {
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
          <Produto href="#" titulo="ABRAÇADEIRA DE SELIM" img="" />
          <Produto href="#" titulo="ADAPTADOR VALVULA PRESTA" img="" />
          <Produto href="#" titulo="APOIO PARA TRANSBIKE PREMIUM" img="" />
          <Produto href="#" titulo="BLOCAGEM DE ALUM P/SELIM" img="" />
          <Produto href="#" titulo="BLOCAGEM DE CUBO ALUM DIANT/TRAS" img="" />
          <Produto href="#" titulo="CABO DE CÂMBIO AÇO INOX LONGO" img="" />
          <Produto href="#" titulo="CABO DE CÂMBIO AÇO INOX C/TEFLON" img="" />
          <Produto href="#" titulo="CABO DE SPEED AÇO INOX C/TEFLON" img="" />
          <Produto href="#" titulo="CANOTE DE SELIM ALUM" img="" />
          <Produto href="#" titulo="CANOTE DE SELIM C/CARRINHO" img="" />
          <Produto href="#" titulo="CONDUÍTE DE CÃMBIO" img="" />
          <Produto href="#" titulo="CONJUNTO FITA DE TRANBIKE" img="" />
          <Produto href="#" titulo="CREMALHEIRA P/TRANSBIKE" img="" />
          <Produto href="#" titulo="DESCANSO CAVALETE ALUM" img="" />
          <Produto href="#" titulo="DESCANSO CENTRAL SKY C/REGULAGEM" img="" />
          <Produto href="#" titulo="DESCANSO LATERAL ALUM C/REGULAGEM" img="" />
          <Produto href="#" titulo="EMENDA DE CORRENTE" img="" />
          <Produto href="#" titulo="ESPAÇADOR ALUM AHEAD" img="" />
          <Produto href="#" titulo="ESPATULA P/TIRAR PNEU" img="" />
          <Produto href="#" titulo="ESPATULA NYLON P/TROCAR PNEU" img="" />
          <Produto href="#" titulo="FAROL" img="" />
          <Produto href="#" titulo="FITA DE ARO PRONTA" img="" />
          <Produto href="#" titulo="GARFO SUSP 29" img="" />
          <Produto href="#" titulo="GUIDÃO ALUM RETO" img="" />
          <Produto href="#" titulo="GUIDÃO DH ALUM" img="" />
          <Produto href="#" titulo="KIT GUIDÃO 31.8 CURVO + SUP 31.8" img="" />
          <Produto href="#" titulo="KIT GUIDÃO 31.8 RETO + SUP 31.8" img="" />
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
