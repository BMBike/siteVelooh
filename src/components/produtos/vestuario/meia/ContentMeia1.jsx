import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentMeia1() {
  const [cor, setCor] = useState("AZUL");
  const [tam, setTam] = useState("CURTO E MÉDIO");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/meia/elocurtoazul.jpeg"
  );
  function mudarCor(cor, foto, tam) {
    setCor(cor);
    setFoto(foto);
    setTam(tam);
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
              <p>MEIA CICLISMO ELO {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/vestuario/meia/elocurtoazul.jpeg",
                    "CURTO E MÉDIO"
                  )
                }
              ></div>
              <div
                className={styles.cinza}
                onClick={() =>
                  mudarCor(
                    "CINZA",
                    "/images/produtos/vestuario/meia/elocinza.jpeg",
                    "CURTO E MÉDIO"
                  )
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "LARANJA",
                    "/images/produtos/vestuario/meia/elolaranja.png",
                    "CURTO, MÉDIO E LONGO"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "PINK",
                    "/images/produtos/vestuario/meia/elorosa.jpeg",
                    "CURTO, MÉDIO E LONGO"
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "VERDE",
                    "/images/produtos/vestuario/meia/eloverde.jpeg",
                    "CURTO E MÉDIO"
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
