import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCortaVento() {
  const [cor, setCor] = useState("");
  const [tam, setTam] = useState("");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/cortavento/"
  );
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        CORTA VENTO:
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
              <p></p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.branco}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "",
                    "/images/produtos/vestuario/cortavento/",
                    ""
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "",
                    "/images/produtos/vestuario/cortavento/",
                    ""
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "",
                    "/images/produtos/vestuario/cortavento/",
                    ""
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
