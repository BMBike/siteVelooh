import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function contentbike() {
  const [cor, setCor] = useState("PRETO");
  const [foto, setFoto] = useState("/imagens/produtos/bike/bike29pto.amrl.jpeg");

  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        BICICLETAS:
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
              <p>BICICLETA ARO 29 {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor("PRETO", "/imagens/produtos/bike/bike29pto.amrl.jpeg")
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}