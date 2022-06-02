import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa4() {
    const [cor, setCor] = useState("AZUL AQUA");
    const[tam, setTam] = useState("2, 4, 6, 8, 10 e 12");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/feminfantquasarazul.png"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
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
                CAMISA FEM. INFANTIL QUASAR {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.azul}
                  onClick={() =>
                    mudarCor(
                      "AZUL AQUA",
                      "/images/produtos/vestuario/camisa/feminfantquasarazul.png",
                      "2, 4, 6, 8, 10 e 12"
                    )
                  }
                ></div>
                <div
                  className={styles.azulrosa}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROSA/AZL",
                      "/images/produtos/vestuario/camisa/feminfantquasarazulrosa.png",
                      "2, 4, 6, 8 e 12"
                    )
                  }
                ></div>
                <div
                  className={styles.rosrox}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROSA",
                      "/images/produtos/vestuario/camisa/feminfantquasarrosrox.png",
                      "2, 4, 6, 8 e 12"
                    )
                  }
                ></div>
                <div
                  className={styles.cinzarosa}
                  onClick={() =>
                    mudarCor(
                      "PRETO/CINZA",
                      "/images/produtos/vestuario/camisa/feminfantquasarcinzarosa.png",
                      "2, 4, 6, 8, 10 e 12"
                    )
                  }
                ></div>
                <div
                  className={styles.verdepiscinarosa}
                  onClick={() =>
                    mudarCor(
                      "VERDE OCEAN",
                      "/images/produtos/vestuario/camisa/feminfantquasarverde.png",
                      "2, 4, 6, 8, 10 e 12"
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
  