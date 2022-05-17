import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps1() {
  const [cor, setCor] = useState("Azul");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/capacete1/Capazul.jfif"
  );
  const [subfoto, setsubFoto] = useState("");
  const [subfoto2, setsubFoto2] = useState("");

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
                CAPACETE BABY {cor} FOSCO C/REGULAGEM 8 MESES A 4 ANOS - VELOOH
                BABY
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.cor1}
                onClick={() =>
                  mudarCor(
                    "Azul",
                    "/images/produtos/capacetes/capacete1/Capazul.jfif"
                  )
                }
              ></div>
              <div
                className={styles.cor2}
                onClick={() =>
                  mudarCor(
                    "Preto",
                    "/images/produtos/capacetes/capacete1/Cappreto.jfif"
                  )
                }
              ></div>
              <div
                className={styles.cor3}
                onClick={() =>
                  mudarCor(
                    "Vermelho",
                    "/images/produtos/capacetes/capacete1/Capvermelho.jfif"
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
