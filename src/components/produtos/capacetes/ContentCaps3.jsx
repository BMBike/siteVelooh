import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps3() {
  const [cor, setCor] = useState("Azul");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/capmtb/azul.png"
  );
  const [subfoto, setsubFoto] = useState("/images/produtos/capacetes/capmtb/azul2.png");
  const [subfoto2, setsubFoto2] = useState("/images/produtos/capacetes/capmtb/azul3.png");

  function mudarCor(cor, foto, subfoto, subfoto2) {
    setCor(cor);
    setFoto(foto);
    setsubFoto(subfoto);
    setsubFoto2(subfoto2);
  }
  return (
    <div className={styles.caps}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        CAPACETES:
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
                CAPACETE MTB LINE {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "Azul",
                    "/images/produtos/capacetes/capmtb/azul.png",
                    "/images/produtos/capacetes/capmtb/azul2.png",
                    "/images/produtos/capacetes/capmtb/azul3.png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    " Rosa",
                    "/images/produtos/capacetes/capmtb/rosa.png",
                    "/images/produtos/capacetes/capmtb/rosa2.png",
                    "/images/produtos/capacetes/capmtb/rosa3.png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "Vermelho",
                    "/images/produtos/capacetes/capmtb/vermelho.png",
                    "/images/produtos/capacetes/capmtb/vermelho2.png",
                    "/images/produtos/capacetes/capmtb/vermelho3.png",
                  )
                }
              ></div>
              <div
                className={styles.cor4}
                onClick={() =>
                  mudarCor(
                    "Rosa",
                    "/images/produtos/capacetes/capacete1/Caprosa.jfif"
                  )
                }
              ></div>
              <div
                className={styles.cor5}
                onClick={() =>
                  mudarCor(
                    "Verde",
                    "/images/produtos/capacetes/capacete1/Capverde.jfif"
                  )
                }
              ></div>
            </div>
            <div className={styles.subfotos}>
              <div
                onClick={() => setFoto(subfoto)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto} alt="Produto" className={styles.imgProd2} />
              </div>
              <div
                onClick={() => setFoto(subfoto2)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto2} className={styles.imgProd2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
