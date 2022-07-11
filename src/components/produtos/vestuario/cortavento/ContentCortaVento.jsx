import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCortaVento() {
  const [cor, setCor] = useState("PRETO");
  const [tam, setTam] = useState("M, G E GG");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/cortavento/preto.jpg"
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
              <p>JAQUETA CORTA VENTO C/BOLSO {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.preto}
                style={{ marginLeft: "0" }}
                onClick={() =>
                  mudarCor(
                    "PRETO",
                    "/images/produtos/vestuario/cortavento/preto.jpg",
                    "M, G E GG"
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "VERDE NEON",
                    "/images/produtos/vestuario/cortavento/verdeneon.jpg",
                    "P, M, G E GG"
                  )
                }
              ></div>
              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "AMARELO NEON",
                    "/images/produtos/vestuario/cortavento/amarelo.jpg",
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
