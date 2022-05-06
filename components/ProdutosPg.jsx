import styles from "../styles/ProdutosPg.module.css";


export default function ProdutosPg(props) {
  return (
    <div className={styles.index}>
      <h1 style={{ fontSize: "3.5rem", marginTop: "40px" }}>{props.title}</h1>
      <div className={styles.produtos}>
        {props.children}
      </div>
    </div>
  );
}
