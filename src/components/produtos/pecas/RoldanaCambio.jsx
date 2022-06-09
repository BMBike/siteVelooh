import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function RoldanaCambio() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/pecas/01009912.png"
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
              ROLDANA CÂMBIO ALUM C/ROL P/SHIMANO/SRAM {cor} 11D
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azulescuro}
                style={{marginLeft:"0"}}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/pecas/01009912.png"
                  )
                }
              ></div>
              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "DOURADO",
                    "/images/produtos/pecas/01009932.png",
                  )
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor(
                    "PRATA",
                    "/images/produtos/pecas/01009931.png",
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "PRETO",
                    "/images/produtos/pecas/01009901.png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/pecas/01009908.png",
                  )
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor(
                    "POLIDO",
                    "/images/produtos/pecas/1563.png",
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
