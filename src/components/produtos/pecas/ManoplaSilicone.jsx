import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ManoplaSilicone() {
  const [cor, setCor] = useState("135MM AZUL");
  const [foto, setFoto] = useState("/images/produtos/pecas/02211299.png");

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
              <p>MANOPLA SILICONE {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor("135MM AZUL", "/images/produtos/pecas/02211299.png")
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "135MM LARANJA",
                    "/images/produtos/pecas/02212199.png"
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "135MM PRETO",
                    "/images/produtos/pecas/02210199(1).png"
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "135MM VERMELHO",
                    "/images/produtos/pecas/02210899.jfif"
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
