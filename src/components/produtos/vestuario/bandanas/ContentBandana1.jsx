import styles from "../../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentBandana1() {
  const [cor, setCor] = useState("Azul");
  const [foto, setFoto] = useState(
    "/images/produtos/vestuario/bandana/elloazul.png"
  );
  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        BANDANAS:
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
              BANDANA ELLO C/PROTEÇÃO UV {cor}
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "Azul",
                    "/images/produtos/vestuario/bandana/elloazul.png",
                  )
                }
              ></div>
              <div
                className={styles.cinza}
                onClick={() =>
                  mudarCor(
                    "Cinza",
                    "/images/produtos/vestuario/bandana/ellocinza.png",
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "Rosa",
                    "/images/produtos/vestuario/bandana/ellorosa.png",
            
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "Verde",
                    "/images/produtos/vestuario/bandana/elloverde.png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "Vermelho",
                    "/images/produtos/vestuario/bandana/ellovermelho.png",
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
