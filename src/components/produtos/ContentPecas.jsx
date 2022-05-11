import styles from "../../styles/produtos/ContentPecas.module.css"

export default function ContentPecas() {
  return (
    <div className={styles.pecas}>
      <div className={styles.div1}>
        <div className={styles.img1}></div>
        <div className={styles.texto}>
          <h1>Peças de bike</h1>
          <p>
            a venda de peças especificas para sua bike é uma das nossas
            especialidades! Mais informações entre em contato!
          </p>
          {/*<Link href="/contato">
            <a className={styles.contato}>Contato</a>
             </Link>*/}
        </div>
      </div>
      <center>
        <div className={styles.div2}>
          <div className={styles.wrapper}>
            <h1>Cambio Tourney Shimano</h1>
            <h1>Cambio traseiro Shimano</h1>
            <div className={styles.cambio1}></div>
            <div className={styles.cambio2}></div>
          </div>
        </div>
      </center>
    </div>
  );
}
