import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa3() {
    const [cor, setCor] = useState("AURORA BOREAL");
    const[tam, setTam] = useState("P, M, G, GG e 3g");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/femgoldazul.jpg"
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
                CAMISA FEMININA GOLD {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.borealazul}
                  style={{marginLeft:"0"}}
                  onClick={() =>
                    mudarCor(
                      "AURORA BOREAL",
                      "/images/produtos/vestuario/camisa/femgoldazul.jpg",
                      "P, M, G, GG e 3g"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverderosa}
                  onClick={() =>
                    mudarCor(
                      "AZUL C/LISTRA VDE/PINK",
                      "/images/produtos/vestuario/camisa/femgoldptrosaverde.png",
                      "P, M, G, GG E 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptrosrox}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROSA/ROXO/AZUL",
                      "/images/produtos/vestuario/camisa/femgoldrosrox.png",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.verderosrox}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE ROXO",
                      "/images/produtos/vestuario/camisa/femgoldrosverde.png",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptrosrox}
                  onClick={() =>
                    mudarCor(
                      "ROXO/PRETO C/PINK",
                      "/images/produtos/vestuario/camisa/femgoldrosrox2.png",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptcolorido}
                  onClick={() =>
                    mudarCor(
                      "PRETO C/LISTRA COLORIDA",
                      "/images/produtos/vestuario/camisa/femgoldptcolorido.jpeg",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.azulrosa}
                  onClick={() =>
                    mudarCor(
                      "TONS DE AZUL C/ PINK",
                      "/images/produtos/vestuario/camisa/femgolazulrosa.png",
                      "P, M, G, GG e 3G"
                    )
                  }
                ></div>
                <div
                  className={styles.verdepiscina}
                  onClick={() =>
                    mudarCor(
                      "VERDE AGUA C/RISCO PTO",
                      "/images/produtos/vestuario/camisa/femgoldverdepiscina.png",
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
  