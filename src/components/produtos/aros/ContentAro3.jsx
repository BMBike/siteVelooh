import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro3() {
  const [cor, setCor] = useState("Azul");
  const[tam, setTam] = useState("26 x 1.1/2");
  const [foto, setFoto] = useState(
    "/images/produtos/aros/vision/azul.png"
  );

  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam)
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        AROS:
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
                ARO VISION RETRO {cor}
              </p>
            </div>
            <div className={styles.cores}>
            <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "Azul",
                    "/images/produtos/aros/vision/azul.png",
                    "26 x 1.1/2"
                  )
                }
              ></div>
            <div
                className={styles.bege}
                onClick={() =>
                  mudarCor(
                    "Bege",
                    "/images/produtos/aros/vision/bege.png",
                    "26 x 1.1/2"
                  )
                }
              ></div>
            
            <div
                className={styles.marrom}
                onClick={() =>
                  mudarCor(
                    "Café",
                    "/images/produtos/aros/vision/marrom.png",
                    "26 x 1.1/2"
                  )
                }
              ></div>
            <div
                className={styles.verdepiscina}
                onClick={() =>
                  mudarCor(
                    "verde",
                    "/images/produtos/aros/vision/verdepiscina.png",
                    "26 x 1.1/2"
                  )
                }
              ></div>
            
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
