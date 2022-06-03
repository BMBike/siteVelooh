import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMeia2() {
    const [cor, setCor] = useState("AZUL/LISTRA PINK");
    const[tam, setTam] = useState("Curto, mÉdio e longo");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/meia/quasarazulrosa1.jpeg"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
          MEIAS:
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
                MEIA CICLISMO QUASAR {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                style={{marginLeft:"0px"}}
                  className={styles.azulrosa}
                  onClick={() =>
                    mudarCor(
                      " AZUL/LISTRA PINK",
                      "/images/produtos/vestuario/meia/quasarazulrosa1.jpeg",
                      "Curto, mÉdio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.azulrosa}
                  onClick={() =>
                    mudarCor(
                      "AZUL/PONTO PINK",
                      "/images/produtos/vestuario/meia/quasarazulrosa2.jpeg",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.rosrox}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROSA/ROXO",
                      "/images/produtos/vestuario/meia/quasarox.jpeg",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.ptrosa}
                  onClick={() =>
                    mudarCor(
                      "PTO/ROSA",
                      "/images/produtos/vestuario/meia/quasarptrosa.jpeg",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverdepiscina}
                  onClick={() =>
                    mudarCor(
                      "VDE AQUA QUADRIC",
                      "/images/produtos/vestuario/meia/quasarverde.jpeg",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
              
              </div>
              <div className={styles.texto}>
              <p> TAMANHOS DO CANO: {tam}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  