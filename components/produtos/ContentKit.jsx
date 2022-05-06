import styles from "../../styles/produtos/ContentKit.module.css"

export default function ContentKit() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }} className={styles.kit}>
      <div className={styles.div1}>
        <div className={styles.img1}></div>
        <div className={styles.div1Text}>
          <h1>Kit Bike</h1>
          <h3>Os preferidos dos clientes</h3>
          <p>
            O Kit bike se baseia na venda de uma bike já montada por nossa
            empresa, assim você não precisa ficar escolhendo peça por peça! mais
            detalhes? entre em contato com a gente!
          </p>
        </div>
      </div>
      <div className={styles.estoque}>
        <h1>Nosso Estoque</h1>
      </div>
      <div className={styles.bikes}>
        <div className={styles.textbike}>
          <h2>Kit bike 29 first 21V</h2>
        </div>

        <div className={styles.bike2}></div>
        <div className={styles.bike3}></div>
        <div className={styles.textbike}>
          <h2>Kit bike 29 first 27V</h2>
        </div>
        <div className={styles.textbike}>
          <h2>Kit bike 29 first 24V</h2>
        </div>
        <div className={styles.bike4}></div>
      </div>
    </div>
  );
}
