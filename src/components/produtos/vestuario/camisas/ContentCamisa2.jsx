import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa2() {
    const [cor, setCor] = useState("AZUL AQUA");
    const[tam, setTam] = useState("P, M, G, GG, 3G E 4G");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/femclassicjetazul.jpg"
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
                CAMISA FEMININA CLASSIC JET {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.ptazul}
                  style={{marginLeft:"0"}}
                  onClick={() =>
                    mudarCor(
                      "AZUL AQUA",
                      "/images/produtos/vestuario/camisa/femclassicjetazul.jpg",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptazulclaro}
                  onClick={() =>
                    mudarCor(
                      "AZUL BB",
                      "/images/produtos/vestuario/camisa/femclassicjetazulbb.jpg",
                      "P, M, G, GG E 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptpink}
                  onClick={() =>
                    mudarCor(
                      "PINK FLUOR",
                      "/images/produtos/vestuario/camisa/femclassicjetpink.jpg",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptrosa}
                  onClick={() =>
                    mudarCor(
                      "ROSA",
                      "/images/produtos/vestuario/camisa/femclassicjetrosa.jpg",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptroxo}
                  onClick={() =>
                    mudarCor(
                      "ROXO",
                      "/images/produtos/vestuario/camisa/femclassicjetroxo.jpg",
                      "P, M, G, GG e 3G"
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
  