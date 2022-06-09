import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentFita() {
  const [cor, setCor] = useState("VERMELHO");
  const [foto, setFoto] = useState(
    "/images/produtos/pecas/1539.png"
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
              FITA DE ARO PRONTA ARO 29 {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/pecas/1539.png"
                  )
                }
              ></div>
              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "AMARELO",
                    "/images/produtos/pecas/1279(2).png",
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
