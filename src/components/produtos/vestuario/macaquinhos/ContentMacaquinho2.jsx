import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMacaquinho1() {
  const [cor, setCor] = useState("PRETO/AZUL");
  const [tam, setTam] = useState("p, m, g, gg e 3g");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/macaquinhos/azulptlonga.png"
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
              <p>MACAQUINHO LOOK FEM M/LONGA {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.ptazulclaro}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "PRETO/AZUL",
                    "/images/produtos/vestuario/macaquinhos/azulptlonga.png",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>

              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "PINK",
                    "/images/produtos/vestuario/macaquinhos/pinkrosa.png",
                    "p, m, g, gg e 3g"
                  )
                }
              ></div>

              <div
                className={styles.cinza}
                onClick={() =>
                  mudarCor(
                    "Gel Salmão",
                    "/images/produtos/vestuario/macaquinhos/cinza.png",
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
