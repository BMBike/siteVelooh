import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro6() {
  const [cor, setCor] = useState("DISCO S/ILHOS PRETO");
  const [tam, setTam] = useState("26");
  const [foto, setFoto] = useState("/images/produtos/aros/dh/pto.jpg");
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        AROS:
      </h1>
      <div className={styles.produtos}>
        <div className={styles.produto}>
          <div className={styles.Moldfoto}>
            <Zoom>
              <img src={foto} alt="Produto" className={styles.imgProd} />
            </Zoom>
          </div>
          <div className={styles.lateral}>
            <div className={styles.texto}>
              <p>ARO 20 DH {cor} </p>
            </div>
            <div className={styles.cores}>
              <div
              style={{marginLeft:'0'}}
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "DISCO S/ILHOS PRETO",
                    "/images/produtos/aros/dh/pto.jpg",
                    "26"
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "DISCO S/ILHOS BRANCO",
                    "/images/produtos/aros/dh/bco.jpg",
                    "26"
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "V-BRACKE S/ILHOS PRETO",
                    "/images/produtos/aros/dh/pto2.jpg",
                    "26 e 26 x 1.1/2"
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "V-BRACKE S/ILHOS BRANCO",
                    "/images/produtos/aros/dh/bco2.jpg",
                    "26"
                  )
                }
              ></div>
             
            </div>
            <div className={styles.texto}>
              <p> TAMANHOS: {tam}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
