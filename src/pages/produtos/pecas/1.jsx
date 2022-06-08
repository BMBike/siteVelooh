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
          <Produto href="#" titulo="ABRAÇADEIRA DE SELIM" img="/images/produtos/pecas/0228(2).png" />
          <Produto href="#" titulo="ADAPTADOR VALVULA PRESTA" img="/images/produtos/pecas/0002.jfif" />
          <Produto href="#" titulo="APOIO PARA TRANSBIKE PREMIUM" img="/images/produtos/pecas/0558.png" />
          <Produto href="#" titulo="BLOCAGEM DE ALUM P/SELIM" img="/images/produtos/pecas/" />
          <Produto href="#" titulo="BLOCAGEM DE CUBO ALUM DIANT/TRAS" img="/images/produtos/pecas/0227.png" />
          <Produto href="#" titulo="CABO DE CÂMBIO AÇO INOX LONGO" img="/images/produtos/pecas/1293.png" />
          <Produto href="#" titulo="CABO DE CÂMBIO AÇO INOX C/TEFLON" img="/images/produtos/pecas/0541.png" />
          <Produto href="#" titulo="CABO DE SPEED AÇO INOX C/TEFLON" img="/images/produtos/pecas/0808.png" />
          <Produto href="#" titulo="CANOTE DE SELIM ALUM" img="/images/produtos/pecas/0860.png" />
          <Produto href="#" titulo="CANOTE DE SELIM C/CARRINHO" img="/images/produtos/pecas/1723.png" />
          <Produto href="#" titulo="CONDUÍTE DE CÂMBIO" img="/images/produtos/pecas/0042.png" />
          <Produto href="#" titulo="CONJUNTO FITA DE TRANBIKE" img="/images/produtos/pecas/0235(1).png" />
          <Produto href="#" titulo="CREMALHEIRA P/TRANSBIKE" img="/images/produtos/pecas/0238(2).png" />
          <Produto href="#" titulo="DESCANSO CAVALETE ALUM" img="/images/produtos/pecas/0854.png" />
          <Produto href="#" titulo="DESCANSO CENTRAL SKY C/REGULAGEM" img="/images/produtos/pecas/0853(1).png" />
          <Produto href="#" titulo="DESCANSO LATERAL ALUM C/REGULAGEM" img="/images/produtos/pecas/0322(1).png" />
          <Produto href="#" titulo="EMENDA DE CORRENTE" img="/images/produtos/pecas/1483(1).png" />
          <Produto href="#" titulo="ESPAÇADOR ALUM AHEAD" img="/images/produtos/pecas/0208(3).png" />
          <Produto href="#" titulo="ESPATULA P/TIRAR PNEU" img="/images/produtos/pecas/0882.png" />
          <Produto href="#" titulo="ESPATULA NYLON P/TROCAR PNEU" img="/images/produtos/pecas/0206.png" />
          <Produto href="#" titulo="FAROL" img="/images/produtos/pecas/0247(3).jfif" />
          <Produto href="#" titulo="FITA DE ARO PRONTA" img="/images/produtos/pecas/1539.png" />
          <Produto href="#" titulo="GARFO SUSP 29" img="/images/produtos/pecas/1715.png" />
          <Produto href="#" titulo="GUIDÃO ALUM RETO" img="/images/produtos/pecas/0855.png" />
          <Produto href="#" titulo="GUIDÃO DH ALUM" img="/images/produtos/pecas/1039.png" />
          <Produto href="#" titulo="KIT GUIDÃO 31.8 CURVO + SUP 31.8" img="/images/produtos/pecas/1369(2).png" />
          <Produto href="#" titulo="KIT GUIDÃO 31.8 RETO + SUP 31.8" img="/images/produtos/pecas/0819.png" />
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
