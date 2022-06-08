import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function Caramanhola500() {
  const [cor, setCor] = useState("PTO/TAMPA AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/acessorios/124619724.png"
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
              CARAMANHOLA 500ML PRO {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.ptazul}
                style={{marginLeft:"0px"}}
                onClick={() =>
                  mudarCor(
                    "PTO/TAMPA AZUL",
                    "/images/produtos/acessorios/124619724.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.ptcinza}
                onClick={() =>
                  mudarCor(
                    "PTO/TAMPA CINZA",
                    "/images/produtos/acessorios/12463124.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "PTO/TAMPA ROSA",
                    "/images/produtos/acessorios/12462424.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.ptverde}
                onClick={() =>
                  mudarCor(
                    "PTO/TAMPA VERDE",
                    "/images/produtos/acessorios/124619624.png"
                   
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "PTO/TAMPA VERMELHO",
                    "/images/produtos/acessorios/12460824.png"
                    
                  )
                }
              ></div>
              <div
                className={styles.brancopt}
                onClick={() =>
                  mudarCor(
                    "TRANSPARENTE/TAMPA PTA",
                    "/images/produtos/acessorios/12460124.png"
                    
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
