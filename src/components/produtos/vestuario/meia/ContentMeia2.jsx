import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMeia2() {
    const [cor, setCor] = useState("Azul");
    const[tam, setTam] = useState("p, m e g");
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
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
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
                      "Azul",
                      "/images/produtos/vestuario/luva/azul.png",
                      "p, m e g"
                    )
                  }
                ></div>
                <div
                  className={styles.laranja}
                  onClick={() =>
                    mudarCor(
                      "Laranja",
                      "/images/produtos/vestuario/luva/laranja.png",
                      "p, m, g e gg"
                    )
                  }
                ></div>
                <div
                  className={styles.rosaclaro}
                  onClick={() =>
                    mudarCor(
                      "Pink",
                      "/images/produtos/vestuario/luva/rosa.png",
                      "p, m, e g"
                    )
                  }
                ></div>
                <div
                  className={styles.preto}
                  onClick={() =>
                    mudarCor(
                      "Preto",
                      "/images/produtos/vestuario/luva/preto.png",
                      "p, m, g e gg"
                    )
                  }
                ></div>
                <div
                  className={styles.verdeclaro}
                  onClick={() =>
                    mudarCor(
                      "verde",
                      "/images/produtos/vestuario/luva/verde.png",
                      "p, m, g e gg"
                    )
                  }
                ></div>
                <div
                  className={styles.vermelho}
                  onClick={() =>
                    mudarCor(
                      "vermelho",
                      "/images/produtos/vestuario/luva/vermelho.png",
                      "g"
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
  