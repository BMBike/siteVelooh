import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap2 from "../../../components/Zap2";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";
import Produto2 from "../../../components/Produto2";
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
          <Produto2
            titulo="ABRAÇADEIRA DE SELIM 28,6/31,8/34,9"
            img="/images/produtos/pecas/0228(2).png"
          />
          <Produto2
            titulo="ADAPTADOR VALVULA PRESTA (KIT/C10)"
            img="/images/produtos/pecas/0002.jfif"
          />
          <Produto2
            titulo="APOIO PARA TRANSBIKE PREMIUM/JET (PAR)"
            img="/images/produtos/pecas/0558.png"
          />
          <Produto2
            titulo="BLOCAGEM DE ALUM PTO P/SELIM"
            img="/images/produtos/pecas/faltante.jpg"
          />
          <Produto2
            titulo="BLOCAGEM DE CUBO ALUM DIANT/TRAS PRETO"
            img="/images/produtos/pecas/0227.png"
          />
          <Produto2
            titulo="CABO DE CÂMBIO AÇO INOX LONGO 19 FIOS"
            img="/images/produtos/pecas/1293.png"
          />
          <Produto2
            titulo="CABO DE CÂMBIO AÇO INOX C/TEFLON 19 FIOS"
            img="/images/produtos/pecas/0541.png"
          />
          <Produto2
            titulo="CABO DE SPEED AÇO INOX C/TEFLON 19 FIOS"
            img="/images/produtos/pecas/0808.png"
          />
          <Produto2
            titulo="CANOTE DE SELIM ALUM PRETO 26.8 X 350MM / 27.2 X 350MM"
            img="/images/produtos/pecas/0860.png"
          />
          <Produto2
            titulo="CANOTE DE SELIM C/CARRINHO PTO 26.8 X 350MM / 27.2 X 350MM"
            img="/images/produtos/pecas/1723.png"
          />
          <Produto2
            titulo="CONDUÍTE DE CÂMBIO 20MTS LINEAR 4MM C/ TEFLON PTO"
            img="/images/produtos/pecas/0042.png"
          />
          <Produto2
            titulo="CONJUNTO FITA DE TRANBIKE AZL (4 FITAS)"
            img="/images/produtos/pecas/0235(1).png"
          />
          <Produto2
            titulo="CREMALHEIRA (PAR) P/TRANSBIKE"
            img="/images/produtos/pecas/0238(2).png"
          />
          <Produto2
            titulo="DESCANSO CAVALETE ALUM"
            img="/images/produtos/pecas/0854.png"
          />
          <Produto2
            titulo="DESCANSO CENTRAL SKY C/REGULAGEM ARO 29"
            img="/images/produtos/pecas/0853(1).png"
          />
          <Produto2
            titulo="DESCANSO LATERAL ALUM C/REGULAGEM 24/29"
            img="/images/produtos/pecas/0322(1).png"
          />
          <Produto2
            titulo="EMENDA DE CORRENTE 12V CROMADA"
            img="/images/produtos/pecas/1483(1).png"
          />
          <Produto2
            titulo="ESPAÇADOR ALUM AHEAD SET OVER 10MM PTO (50PÇS)"
            img="/images/produtos/pecas/0208(3).png"
          />
          <Produto2
            titulo="ESPATULA AÇO CROM P/TIRAR PNEU 3 PÇS"
            img="/images/produtos/pecas/0882.png"
          />
          <Produto2
            titulo="ESPATULA NYLON PTO P/TROCAR PNEU 2 PÇS"
            img="/images/produtos/pecas/0206.png"
          />
          <Produto2
            titulo="FAROL (300 LUMENS/400 LUMENS/450 LUMENS)"
            img="/images/produtos/pecas/0247(3).jfif"
          />
          <Produto
            href="/produtos/pecas/fita/"
            cor1="vermelho"
            cor2="amarelo"
            titulo="FITA DE ARO PRONTA ARO 29"
            img="/images/produtos/pecas/1539.png"
          />
          <Produto2
            titulo="GARFO SUSP 29 ACO 28.6 C/TRAVA OMBRO"
            img="/images/produtos/pecas/1715.png"
          />
          <Produto2
            titulo="GUIDÃO ALUM RETO 31.8 X 700MM PTO"
            img="/images/produtos/pecas/0855.png"
          />
          <Produto2
            titulo="GUIDÃO DH ALUM CURVO 31.8 PTO"
            img="/images/produtos/pecas/1039.png"
          />
          <Produto2
            titulo="KIT GUIDÃO 31.8 CURVO + SUP 31.8"
            img="/images/produtos/pecas/1369(2).png"
          />
          <Produto2
            titulo="KIT GUIDÃO 31.8 RETO + SUP 31.8"
            img="/images/produtos/pecas/0819.png"
          />
        </ProdutosPg>
        <div>
          <div className={styles.navdiv}>
            <Link href={"/produtos/pecas"}>
              <p className={styles.nav}>1</p>
            </Link>
            <Link href={"/produtos/pecas/2"}>
              <p className={styles.nav}>2</p>
            </Link>
            <Link href={"/produtos/pecas/3"}>
              <p className={styles.nav}>3</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <Zap2 />
    </div>
  );
}
