import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function SuporteCaramanahola() {
  const [cor, setCor] = useState("NYLON AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/acessorios/02031299.png"
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
              SUPORTE CARAMANHOLA {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                style={{marginLeft:"0px"}}
                onClick={() =>
                  mudarCor(
                    "NYLON AZUL",
                    "/images/produtos/acessorios/02031299.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.branco}
                onClick={() =>
                  mudarCor(
                    "NYLON BRANCO",
                    "/images/produtos/acessorios/02032999.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.grafite}
                onClick={() =>
                  mudarCor(
                    "NYLON GRAFITE",
                    "/images/produtos/acessorios/02033999(1).png"
                    
                  )
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "NYLON LARANJA",
                    "/images/produtos/acessorios/02032199(1).png"
                   
                  )
                }
              ></div>
              <div
                className={styles.lilas}
                onClick={() =>
                  mudarCor(
                    "NYLON LÍLAS",
                    "/images/produtos/acessorios/02034099(1).png"
                    
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "NYLON PRETO",
                    "/images/produtos/acessorios/02030199.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "NYLON ROSA",
                    "/images/produtos/acessorios/02032499.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "NYLON VERDE",
                    "/images/produtos/acessorios/02032799.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "NYLON VERMELHO",
                    "/images/produtos/acessorios/02030899(1).png"
                    
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "ALUMÍNIO PRETO",
                    "/images/produtos/acessorios/0540(1).jpg"
                    
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
