import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMeia1() {
    const [cor, setCor] = useState("Azul");
    const[tam, setTam] = useState("Curto e mÉdio");
    const [foto, setFoto] = useState(
      "/images/produtos/vestuario/meia/elocurtoazul.jpeg"
    );
    function mudarCor(cor, foto, tam) {
      setCor(cor);
      setFoto(foto);
      setTam(tam)
    }
    return (
      <div className={styles.prods}>
        <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
          MEIAS:
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
                MEIA CICLISMO ELO {cor}
                </p>
              </div>
              <div className={styles.cores}>
                <div
                  className={styles.azul}
                  onClick={() =>
                    mudarCor(
                      "Azul",
                      "/images/produtos/vestuario/meia/elocurtoazul.jpeg",
                      "Curto e médio"
                    )
                  }
                ></div>
                <div
                  className={styles.cinza}
                  onClick={() =>
                    mudarCor(
                      "Cinza",
                      "/images/produtos/vestuario/meia/elocinza.jpeg",
                      "Curto e médio"
                    )
                  }
                ></div>
                <div
                  className={styles.laranja}
                  onClick={() =>
                    mudarCor(
                      "Laranja",
                      "/images/produtos/vestuario/meia/elolaranja.png",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.rosa}
                  onClick={() =>
                    mudarCor(
                      "PINK",
                      "/images/produtos/vestuario/meia/elorosa.jpeg",
                      "Curto, médio e longo"
                    )
                  }
                ></div>
                <div
                  className={styles.verdeclaro}
                  onClick={() =>
                    mudarCor(
                      "verde",
                      "/images/produtos/vestuario/meia/eloverde.jpeg",
                      "Curto e médio"
                    )
                  }
                ></div>
              
              </div>
              <div className={styles.texto}>
              <p> TAMANHOS DO CANO: {tam}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  