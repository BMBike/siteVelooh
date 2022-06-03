import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa5() {
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
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
          CAMISAS:
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
                CAMISA FEMININA QUASAR  {cor}
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
                  className={styles.azul}
                  style={{marginLeft:'15px'}}
                  onClick={() =>
                    mudarCor(
                      "AZUL AQUA",
                      "/images/produtos/vestuario/camisa/feminfantquasarazul.png",
                      "M, G"
                    )
                  }
                ></div>
               
                <div
                  className={styles.cinzarosa}
                  onClick={() =>
                    mudarCor(
                      "PRETO/CINZA",
                      "/images/produtos/vestuario/camisa/feminfantquasarcinzarosa.png",
                      "G"
                    )
                  }
                ></div>
                <div
                  className={styles.verdepiscinarosa}
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
  