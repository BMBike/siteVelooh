import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro1() {
  const [cor, setCor] = useState("AZUL");
  const [tam, setTam] = useState("20, 24, 26 e 26 x 1.1/2");
  const [foto, setFoto] = useState("/images/produtos/aros/aero/azul.png");
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
              <p>ARO 20 AERO {cor} VELOOH</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azulescuro}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/aros/aero/azul.png",
                    "20, 24, 26 e 26 x 1.1/2"
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "PRETO",
                    "/images/produtos/aros/aero/preto.png",
                    "20, 24, 26, 26X1.1/2 e 27"
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "BRANCO",
                    "/images/produtos/aros/aero/branco.png",
                    "20, 24, 26 e 26 X 1.1/2"
                  )
                }
              ></div>
              <div
                className={styles.rosaclaro}
                onClick={() =>
                  mudarCor(
                    "ROSA",
                    "/images/produtos/aros/aero/rosa.png",
                    "20, 26 e 26 X 1.1/2"
                  )
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor(
                    "POLIDO",
                    "/images/produtos/aros/aero/polido.png",
                    "20, 24, 26, 26 X 1.1/2 e 27"
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
