import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro4() {
  const [cor, setCor] = useState("LARANJA");
  const [tam, setTam] = useState("20, 24, 26 e 26 x 1.1/2");
  const [foto, setFoto] = useState("/images/produtos/aros/neon/laranja.png");

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
              <p>ARO AERO NEON {cor} VELOOH</p>
            </div>
            <div className={styles.cores}>
              <div
                style={{ marginLeft: "0px" }}
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "LARANJA",
                    "/images/produtos/aros/neon/laranja.png",
                    "20, 24, 26 e 26 x 1.1/2"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA",
                    "/images/produtos/aros/neon/rosa.png",
                    "20, 24, 26 e 26 x 1.1/2"
                  )
                }
              ></div>

              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "VERDE",
                    "/images/produtos/aros/neon/verde.png",
                    "20, 24 e 26"
                  )
                }
              ></div>
              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "AMARELO",
                    "/images/produtos/aros/neon/amarelo.png",
                    "26 x 1.1/2"
                  )
                }
              ></div>
            </div>
            <div className={styles.texto2}>
              <p> TAMANHOS: {tam}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
