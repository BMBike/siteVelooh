import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentBermuda5() {
    const [foto, setFoto] = useState(
        "/images/produtos/vestuario/bretelle/bretelle.png"
      );
      const[tam, setTam] = useState("P, M, G, GG E XG");
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        BRETELLE
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
                BRETELLE MASCULINO GEL D80
              </p>
            </div>
            <div className={styles.texto2}>
            <p> TAMANHOS: {tam}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
