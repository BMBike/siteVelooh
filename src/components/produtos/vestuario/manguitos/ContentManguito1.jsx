import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentManguito1() {
    const [cor, setCor] = useState("AZUL");
    const[tam, setTam] = useState("P, M, G E GG");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/manguito/ptazul.png"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
          Manguitos:
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
                MANGUITO C/ PROTEÇÃO UV PRETO DETALHE {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.azul}
                  onClick={() =>
                    mudarCor(
                      "AZUL",
                      "/images/produtos/vestuario/manguito/ptazul.png",
                      "P, M, G E GG"
                    )
                  }
                ></div>
                <div
                  className={styles.rosa}
                  onClick={() =>
                    mudarCor(
                      "ROSA",
                      "/images/produtos/vestuario/manguito/ptrosa.png",
                      "P, M E G"
                    )
                  }
                ></div>
                <div
                  className={styles.polido}
                  onClick={() =>
                    mudarCor(
                      "REFLETIVO",
                      "/images/produtos/vestuario/manguito/ptrefletivo.png",
                      "P, M, G E GG"
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
  