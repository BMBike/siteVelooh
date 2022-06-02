
import styles from "../styles/Produto2.module.css"
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function Produto(props) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <center><h3 style={{fontSize:"1.5rem"}}>{props.titulo}</h3></center>
     <div className={styles.prodMold}>
       <Zoom>
       <img src={props.img} alt="Produto" className={styles.imgProd} />
       </Zoom>
            
            <div className={styles.cores}>
              <div className={styles[props.cor1]}></div>
              <div className={styles[props.cor2]}></div>
              <div className={styles[props.cor3]}></div>
              <div className={styles[props.cor4]}></div>
              <div className={styles[props.cor5]}></div>
              <div className={styles[props.cor6]}></div>
              <div className={styles[props.cor7]}></div>
              <div className={styles[props.cor8]}></div>
              <div className={styles[props.cor9]}></div>
            </div>
          </div>
    </div>
  );
}
