import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentBandana2() {
  const [cor, setCor] = useState("Azul/Listra Pink");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/bandana/quasarazulrosa1.png"
  );
  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        BANDANAS:
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
              BANDANA QUASAR C/PROTEÇÃO UV {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azulrosa}
                onClick={() =>
                  mudarCor(
                    "Azul/Listra Pink",
                    "/images/produtos/vestuario/bandana/quasarazulrosa1.png",
                  )
                }
              ></div>
              <div
                className={styles.azulrosa}
                onClick={() =>
                  mudarCor(
                    "AZUL/PONTO PINK",
                    "/images/produtos/vestuario/bandana/quasarazulrosa2.png",
                  )
                }
              ></div>
              <div
                className={styles.rosrox}
                onClick={() =>
                  mudarCor(
                    "DEGRADE ROSA/ROXO",
                    "/images/produtos/vestuario/bandana/quasarrosrox.png",
            
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "PTO/ROSA",
                    "/images/produtos/vestuario/bandana/quasarptrosa.png",
                  )
                }
              ></div>
              <div
                className={styles.ptverdepiscina}
                onClick={() =>
                  mudarCor(
                    "VERDE AQUA QUADRIC",
                    "/images/produtos/vestuario/bandana/quasarverde.png",
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
