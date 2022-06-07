import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa7() {
  const [cor, setCor] = useState("AZUL/VERDE AGUA");
  const [tam, setTam] = useState("3G");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/camisa/mascazulvd.png"
  );
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
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
              <p>CAMISA MASCULINA WIND {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.ptverdepiscina}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "AZUL FLUOR",
                    "/images/produtos/vestuario/camisa/mascazulvd.png",
                    "3G"
                  )
                }
              ></div>

              <div
                className={styles.azulverdepiscina}
                onClick={() =>
                  mudarCor(
                    "LISTRA AZUL/VERDE",
                    "/images/produtos/vestuario/camisa/00281408.png",
                    "G E GG"
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
