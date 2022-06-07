import styles from "../styles/ProdutosPg.module.css";

export default function ProdutosPg(props) {
  return (
    <div className={styles.index}>
      <h1 className={styles.titulo}>{props.title}</h1>
      <div className={styles.produtos}>{props.children}</div>
    </div>
  );
}
