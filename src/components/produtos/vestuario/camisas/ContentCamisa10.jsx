import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa10() {
    const [cor, setCor] = useState("AZUL/VERDE");
    const[tam, setTam] = useState("P, M, G, GG E 4G");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/mascinfantilwindmangaazul.png"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
          CAMISAS:
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
                CAMISA MASC WIND M/LONGA {cor}
                </p>
              </div>
              <div className={styles.cores}>
              <div
                  className={styles.azulverde}
                  style={{marginLeft:'0'}}
                  onClick={() =>
                    mudarCor(
                      "AZUL/VERDE",
                      "/images/produtos/vestuario/camisa/mascinfantilwindmangaazul.png",
                      "P, M, G, GG E 4G"
                    )
                  }
                ></div>
                
                
                <div
                  className={styles.cinza}
                  style={{marginLeft:'15px'}}
                  onClick={() =>
                    mudarCor(
                      "A GEOMET PTO/CINZA",
                      "/images/produtos/vestuario/camisa/mangacinza.png",
                      "G, GG, 3G E 4G"
                    )
                  }
                ></div>
               
                <div
                  className={styles.ptazul}
                  onClick={() =>
                    mudarCor(
                      "PRETO/AZUL",
                      "/images/produtos/vestuario/camisa/00290418.png",
                      "M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverde}
                  onClick={() =>
                    mudarCor(
                      "PRETO/VERDE",
                      "/images/produtos/vestuario/camisa/00290618.png",
                      "M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptamarelo}
                  onClick={() =>
                    mudarCor(
                      "PTO C/LINHA DOURADO",
                      "/images/produtos/vestuario/camisa/00290509.jpg",
                      "M, G, GG E 4G"
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
  