import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa6() {
  const [cor, setCor] = useState("AZUL");
  const [tam, setTam] = useState("P, M, G, GG, 3G E 4G");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/camisa/masclassicjetazul.jpg"
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
              <p>CAMISA MASCULINA CLASSIC JET {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.ptazul}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/vestuario/camisa/masclassicjetazul.jpg",
                    "P, M, G, GG, 3G E 4G"
                  )
                }
              ></div>

              <div
                className={styles.ptamarelo}
                onClick={() =>
                  mudarCor(
                    "AMARELO FLUOR",
                    "/images/produtos/vestuario/camisa/08098018.jpg",
                    "P, M, G, GG, 3G E 4G"
                  )
                }
              ></div>

              <div
                className={styles.ptcinza}
                onClick={() =>
                  mudarCor(
                    "CINZA",
                    "/images/produtos/vestuario/camisa/08093019.jpg",
                    "P, M, G, GG, 3G E 4G"
                  )
                }
              ></div>
              <div
                className={styles.ptlaranja}
                onClick={() =>
                  mudarCor(
                    "LARANJA",
                    "/images/produtos/vestuario/camisa/08092119.jpg",
                    "P, M, G, GG, 3G E 4G"
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/vestuario/camisa/08090804.jpg",
                    "P, M, G, GG, 3G E 4G"
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
