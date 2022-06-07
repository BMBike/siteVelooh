import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMeia3() {
    const [cor, setCor] = useState("LISTRA AZL/VDE");
    const[tam, setTam] = useState("CURTO E MÉDIO");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/meia/windazulvd.jpeg"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
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
                MEIA CICLISMO WIND {cor}
                </p>
              </div>
              <div className={styles.cores}>
              <div
                 style={{marginLeft:"0px"}}
                  className={styles.azulverdepiscina}
                  onClick={() =>
                    mudarCor(
                      "LISTRA AZL/VDE",
                      "/images/produtos/vestuario/meia/windazulvd.jpeg",
                      "CURTO E MÉDIO"
                    )
                  }
                ></div>
                <div
             
                  className={styles.ptamarelo}
                  onClick={() =>
                    mudarCor(
                      "AMR/PTO ",
                      "/images/produtos/vestuario/meia/windamarelo.jpeg",
                      "CURTO, MÉDIO E LONGO"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverdepiscina}
                  onClick={() =>
                    mudarCor(
                      "AZL/VDE AQUA",
                      "/images/produtos/vestuario/meia/windverde.jpeg",
                      "CURTO E MÉDIO")
                  }
                ></div>
                <div
                  className={styles.vermelhoroxo}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE VMO/AZL",
                      "/images/produtos/vestuario/meia/windazulvm.jpeg",
                      "CURTO, MÉDIO E LONGO"
                    )
                  }
                ></div>
               
                <div
                  className={styles.vermelho}
                  onClick={() =>
                    mudarCor(
                      "Vemelho",
                      "/images/produtos/vestuario/meia/windvermelho.jpeg",
                      "CURTO, MÉDIO E LONGO"
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
  