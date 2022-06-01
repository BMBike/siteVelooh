import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa6() {
    const [cor, setCor] = useState("DEGRADE ROSA/AZL");
    const[tam, setTam] = useState("M, G");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/feminfantquasarazulrosa.png",
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
          Camisas:
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
                CAMISA MASC INFANTIL WIND {cor}
                </p>
              </div>
              <div className={styles.cores}>
              <div
                  className={styles.azulrosa}
                  style={{marginLeft:'0'}}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROSA/AZL",
                      "/images/produtos/vestuario/camisa/feminfantquasarazulrosa.png",
                      "M, G"
                    )
                  }
                ></div>
                
                
                <div
                  className={styles.azulverdepiscina}
                  style={{marginLeft:'0'}}
                  onClick={() =>
                    mudarCor(
                      "AZUL AQUA",
                      "/images/produtos/vestuario/camisa/feminfantquasarazul.png",
                      "M, G"
                    )
                  }
                ></div>
               
                <div
                  className={styles.ptverdepiscina}
                  onClick={() =>
                    mudarCor(
                      "PRETO/CINZA",
                      "/images/produtos/vestuario/camisa/feminfantquasarcinzarosa.png",
                      "G"
                    )
                  }
                ></div>
                <div
                  className={styles.azulvermelho}
                  onClick={() =>
                    mudarCor(
                      "VERDE OCEAN",
                      "/images/produtos/vestuario/camisa/feminfantquasarverde.png",
                      "G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptamarelo}
                  onClick={() =>
                    mudarCor(
                      "VERDE OCEAN",
                      "/images/produtos/vestuario/camisa/feminfantquasarverde.png",
                      "G"
                    )
                  }
                ></div>
                <div
                  className={styles.vermelho}
                  onClick={() =>
                    mudarCor(
                      "VERDE OCEAN",
                      "/images/produtos/vestuario/camisa/feminfantquasarverde.png",
                      "G"
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
  