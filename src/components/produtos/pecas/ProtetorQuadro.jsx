import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ProtetorQuadro() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState("/images/produtos/pecas/03261299.png");

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
              <p>PROTETOR DE QUADRO DETALHE {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor("AZUL", "/images/produtos/pecas/03261299.png")
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor("ROSA", "/images/produtos/pecas/03262499.png")
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor("REFLETIVO", "/images/produtos/pecas/03265399.png")
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
