import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ManoplaMtb() {
  const [cor, setCor] = useState("125MM AZL");
  const [foto, setFoto] = useState(
    "/images/produtos/pecas/1047.png"
  );


  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);

  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        PEÇAS:
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
              <p>
              MANOPLA MTB {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "125MM AZL",
                    "/images/produtos/pecas/1047.png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "125MM ROSA",
                    "/images/produtos/pecas/0435.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "MAX PTO",
                    "/images/produtos/pecas/1747.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "125MM PTO",
                    "/images/produtos/pecas/0220.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "DESCANSO C/TRAVA ALUM PTO",
                    "/images/produtos/pecas/1432.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "ESPUMA PTO",
                    "/images/produtos/pecas/0436.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "PRO PTO",
                    "/images/produtos/pecas/1946.jpg",
                  )
                }
              ></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
