import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCamisa7() {
    const [cor, setCor] = useState("AZUL FLUOR");
    const[tam, setTam] = useState("P, M, G, GG, 3G E 4G");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/camisa/mascgoldazul.jpeg",
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
          Camisas:
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
                CAMISA MASCULINA GOLD {cor}
                </p>
              </div>
              <div className={styles.cores}>
              <div
                  className={styles.azul}
                  style={{marginLeft:'0'}}
                  onClick={() =>
                    mudarCor(
                      "AZUL FLUOR",
                      "/images/produtos/vestuario/camisa/mascgoldazul.jpeg",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                
                
                <div
                  className={styles.azulescuro}
                  onClick={() =>
                    mudarCor(
                      "AZUL C/LISTRA",
                      "/images/produtos/vestuario/camisa/06366809.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
               
                <div
                  className={styles.azulverde}
                  onClick={() =>
                    mudarCor(
                      "AZUL DETALHE VERDE",
                      "/images/produtos/vestuario/camisa/06366719.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverdepiscina}
                  onClick={() =>
                    mudarCor(
                      "VERDE OCEAN",
                      "/images/produtos/vestuario/camisa/06368318.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptazul}
                  onClick={() =>
                    mudarCor(
                      "PRETO/AZUL",
                      "/images/produtos/vestuario/camisa/06368519.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.azullaranja}
                  onClick={() =>
                    mudarCor(
                      "PRETO C/PONTO AZUL",
                      "/images/produtos/vestuario/camisa/06368418.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptcinza}
                  onClick={() =>
                    mudarCor(
                      "PTO/CINZA DETALHE AZUL",
                      "/images/produtos/vestuario/camisa/06366518.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptbrancovermelho}
                  onClick={() =>
                    mudarCor(
                      "PRETO/CAMUFLADO",
                      "/images/produtos/vestuario/camisa/06366608.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptverde}
                  onClick={() =>
                    mudarCor(
                      "VERDE/PRETO",
                      "/images/produtos/vestuario/camisa/06366918.png",
                      "P, M, G, GG, 3G E 4G"
                    )
                  }
                ></div>
                <div
                  className={styles.ptcinza}
                  onClick={() =>
                    mudarCor(
                      "PTO/CINZA",
                      "/images/produtos/vestuario/camisa/06360209.png",
                      "P, M, G, GG, 3G E 4G"
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
  