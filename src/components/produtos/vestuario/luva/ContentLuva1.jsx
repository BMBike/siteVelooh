import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentLuva1() {
    const [cor, setCor] = useState("AZUL");
    const[tam, setTam] = useState("P, M E G");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/luva/azul.png"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
          LUVAS:
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
                LUVA DE MAO DEDO VAZADO {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.azul}
                  onClick={() =>
                    mudarCor(
                      "AZUL",
                      "/images/produtos/vestuario/luva/azul.png",
                      "P, M E G"
                    )
                  }
                ></div>
                <div
                  className={styles.laranja}
                  onClick={() =>
                    mudarCor(
                      "LARANJA",
                      "/images/produtos/vestuario/luva/laranja.png",
                      "P, M, G E GG"
                    )
                  }
                ></div>
                <div
                  className={styles.rosaclaro}
                  onClick={() =>
                    mudarCor(
                      "PINK",
                      "/images/produtos/vestuario/luva/rosa.png",
                      "P, M, E G"
                    )
                  }
                ></div>
                <div
                  className={styles.preto}
                  onClick={() =>
                    mudarCor(
                      "PRETO",
                      "/images/produtos/vestuario/luva/preto.png",
                      "P, M, G E GG"
                    )
                  }
                ></div>
                <div
                  className={styles.verdeclaro}
                  onClick={() =>
                    mudarCor(
                      "VERDE",
                      "/images/produtos/vestuario/luva/verde.png",
                      "P, M, G E GG"
                    )
                  }
                ></div>
                <div
                  className={styles.vermelho}
                  onClick={() =>
                    mudarCor(
                      "VERMELHO",
                      "/images/produtos/vestuario/luva/vermelho.png",
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
  