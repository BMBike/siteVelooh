import Link from "next/link";
import styles from "../styles/Produto.module.css"
export default function Produto(props) {
  return (
    <div>
        <Link href={props.href}><div className={styles.prodMold}>
            <img src={props.img} alt="Produto" className={styles.imgProd} />
            <div className={styles.cores}>
              <div className={styles[props.cor1]}></div>
              <div className={styles[props.cor2]}></div>
              <div className={styles[props.cor3]}></div>
              <div className={styles[props.cor4]}></div>
              <div className={styles[props.cor5]}></div>
            </div>
          </div></Link>
    </div>
  );
}
