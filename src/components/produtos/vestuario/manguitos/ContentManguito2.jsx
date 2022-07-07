import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentManguito2() {
  const [cor, setCor] = useState("AZUL");
  const [tam, setTam] = useState("P, M, e G ");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/manguito/quasarazul.png"
  );
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        MANGUITOS:
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
              <p>MANGUITO QUASAR C/PROTEÇÃO UV {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/vestuario/manguito/quasarazul.png",
                    "P, M e G"
                  )
                }
              ></div>
              <div
                className={styles.azulrosa}
                onClick={() =>
                  mudarCor(
                    "AZUL/LISTRA PINK",
                    "/images/produtos/vestuario/manguito/quasarazulrosa1.png",
                    "P E G"
                  )
                }
              ></div>
              <div
                className={styles.azulrosa}
                onClick={() =>
                  mudarCor(
                    "AZUL/PONTO PINK",
                    "/images/produtos/vestuario/manguito/quasarazulrosa2.png",
                    "P, M e G"
                  )
                }
              ></div>
              <div
                className={styles.rosrox}
                onClick={() =>
                  mudarCor(
                    "DEGRADE ROSA/ROXO",
                    "/images/produtos/vestuario/manguito/quasarrosrox.png",
                    "P, M e G"
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "PTO/ROSA",
                    "/images/produtos/vestuario/manguito/quasarptrosa.png",
                    "P, M E G"
                  )
                }
              ></div>
              <div
                className={styles.ptverdepiscina}
                onClick={() =>
                  mudarCor(
                    "VERDE AQUA QUADRIC",
                    "/images/produtos/vestuario/manguito/quasarverde.png",
                    "P, M e G"
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
