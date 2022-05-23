import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro5() {
  const [cor, setCor] = useState("Laranja");
  const[tam, setTam] = useState("29");
  const [foto, setFoto] = useState(
    "/images/produtos/aros/aerocubo/laranja.png"
  );
  const [cubo, setCubo] = useState("Alumínio")

  function mudarCor(cor, foto, tam, cubo) {
    setCor(cor);
    setFoto(foto);
    setTam(tam)
    setCubo(cubo)
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
              ARO aero 36f disco pto c/adesivo {cor} e c/cubo  
              </p>
            </div>
            <div className={styles.cores}>
            <div
                style={{marginLeft:"0px"}}
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "Laranja",
                    "/images/produtos/aros/aerocubo/laranja.png",
                    "29",
                    "Alumínio"
                  )
                }
              ></div>
            <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "Rosa",
                    "/images/produtos/aros/aerocubo/rosa.png",
                    "29",
                    "Alumínio"
                  )
                }
              ></div>
            
            <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "Verde",
                    "/images/produtos/aros/aerocubo/verde.png",
                    "29",
                    "Alumínio e Aço"
                  )
                }
              ></div>
            <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "Amarelo",
                    "/images/produtos/aros/aerocubo/amarelo.png",
                    "29",
                    "Alumínio"
                  )
                }
              ></div>  
            </div>
            <div className={styles.texto2}>
            <p> TAMANHOS: {tam}</p>
            </div>
            <div className={styles.texto2}>
            <p> Materiais de cubo disponíveis: {cubo}</p>
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  );
}
