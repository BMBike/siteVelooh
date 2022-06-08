import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function Caramanhola600() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/acessorios/01971299(1).png"
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
              CARAMANHOLA ISOTÉRMICA 600ML {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                style={{marginLeft:"0px"}}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/acessorios/01971299(1).png"
                    
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "PINK",
                    "/images/produtos/acessorios/01974499.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "PRETO",
                    "/images/produtos/acessorios/01970199(1).png"
                    
                  )
                }
              ></div>
              <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "VERDE",
                    "/images/produtos/acessorios/01972799(1).png"
                   
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/acessorios/01970899.png"
                    
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
