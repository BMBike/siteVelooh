import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMacaquinho1() {
  const [cor, setCor] = useState("Gel Azul BB");
  const [tam, setTam] = useState("p, m, g, gg e 3g");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/macaquinhos/azulbb.png"
  );
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        MACAQUINHOS:
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
              <p>MACAQUINHO LOOK FEM. {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azulbb}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "Gel Azul BB",
                    "/images/produtos/vestuario/macaquinhos/azulbb.png",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>

              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "Gel Amarelo Fluor",
                    "/images/produtos/vestuario/macaquinhos/amarelo.jpeg",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>

              <div
                className={styles.salmao}
                onClick={() =>
                  mudarCor(
                    "Gel Salmão",
                    "/images/produtos/vestuario/macaquinhos/salmao.jpeg",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "Gel Verde Fluor",
                    "/images/produtos/vestuario/macaquinhos/verde.jpeg",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "GEL VERMELHO",
                    "/images/produtos/vestuario/macaquinhos/vermelho.png",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>
              <div
                className={styles.azulrosa}
                onClick={() =>
                  mudarCor(
                    "DEGRADE ROSA/AZUL",
                    "/images/produtos/vestuario/macaquinhos/rosaazul.png",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "PRETO/VERMELHO",
                    "/images/produtos/vestuario/macaquinhos/ptvermelho.jpeg",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>
              <div
                className={styles.roxo}
                onClick={() =>
                  mudarCor(
                    "VINHO",
                    "/images/produtos/vestuario/macaquinhos/roxo.jpeg",
                    "p, m, g, gg e 3g"
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
