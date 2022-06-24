import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function BolsaSelimMtb() {
  const [tam, setTam] = useState("NORMAL E TAM G EXPANSÍVEL");
  const [foto, setFoto] = useState("/images/produtos/acessorios/0328(1).png");
  const [subfoto, setsubFoto] = useState(
    "/images/produtos/acessorios/0328(3).png"
  );
  const [subfoto2, setsubFoto2] = useState(
    "/images/produtos/acessorios/0328.png"
  );
  const [subfoto3, setsubFoto3] = useState(
    "/images/produtos/acessorios/0328(1).png"
  );

  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        ACESSÓRIOS:
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
              <p>BOLSA DE SELIM MTB</p>
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
              <div
                onClick={() => setFoto(subfoto3)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto3} className={styles.imgProd2} />
              </div>
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
