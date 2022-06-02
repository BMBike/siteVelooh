import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa8() {
    const [cor, setCor] = useState("LISTRA AZUL/VERDE");
    const[tam, setTam] = useState("2, 4, 6, 8 e 10");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/mascinfantilwind.png"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
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
                CAMISA MASC INFANTIL WIND {cor}
                </p>
              </div>
              <div className={styles.cores}>
              <div
                  className={styles.azulverdepiscina}
                  style={{marginLeft:'0'}}
                  onClick={() =>
                    mudarCor(
                      "LISTRA AZUL/VERDE",
                      "/images/produtos/vestuario/camisa/mascinfantilwind.png",
                      "2, 4, 6, 8 e 10"
                    )
                  }
                ></div>
                
                
                <div
                  className={styles.ptverdepiscina}
                  style={{marginLeft:'15px'}}
                  onClick={() =>
                    mudarCor(
                      "AZUL/VERDE AGUA",
                      "/images/produtos/vestuario/camisa/mascinfwindverocean.png",
                      "2, 4, 6 e 8"
                    )
                  }
                ></div>
               
                <div
                  className={styles.azulvermelho}
                  onClick={() =>
                    mudarCor(
                      "DEGRADE VERMELHO/AZUL",
                      "/images/produtos/vestuario/camisa/03211116.png",
                      "2,6 e 8"
                    )
                  }
                ></div>
                <div
                  className={styles.ptamarelo}
                  onClick={() =>
                    mudarCor(
                      "PRETO/AMARELO",
                      "/images/produtos/vestuario/camisa/mascinfwindptamarelo.png",
                      "2, 4, 6, 8, 10 e 12"
                    )
                  }
                ></div>
                <div
                  className={styles.vermelho}
                  onClick={() =>
                    mudarCor(
                      "VERMELHO",
                      "/images/produtos/vestuario/camisa/mascwindinfvermelho.png",
                      "2, 4, 8 e 10"
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
  