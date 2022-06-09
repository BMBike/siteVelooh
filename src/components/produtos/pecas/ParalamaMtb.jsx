import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ParalamaMtb() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/pecas/02071299.png"
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
              PARALAMA DIANTEIRO MTB {cor} C/PRESILHA
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/pecas/02071299.png"
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "BRANCO",
                    "/images/produtos/pecas/02072999.png",
                  )
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "LARANJA",
                    "/images/produtos/pecas/02072199.png",
                  )
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor(
                    "PRATA",
                    "/images/produtos/pecas/02073199.png",
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA",
                    "/images/produtos/pecas/02072499.png",
                  )
                }
              ></div>
              <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "VERDE",
                    "/images/produtos/pecas/02072799.png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/pecas/02070899.png",
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
