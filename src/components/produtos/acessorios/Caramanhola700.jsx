import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function Caramanhola700() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/acessorios/07671299.png"
  );

  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);
  
  }
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
              <p>
              CARAMANHOLA TÉRMICA 700ML {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                style={{marginLeft:"0px"}}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/acessorios/07671299.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA",
                    "/images/produtos/acessorios/07672499.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "PRETO",
                    "/images/produtos/acessorios/07670199.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "VERDE",
                    "/images/produtos/acessorios/07672799.png"
                   
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/acessorios/07670899.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "BRANCO",
                    "/images/produtos/acessorios/07672999.png"
                    
                  )
                }
              ></div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
