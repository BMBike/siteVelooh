import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps3() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/mtbtext/azulpt.png"
  );
  const [subfoto, setsubFoto] = useState(
    "/images/produtos/capacetes/mtbtext/azulpt2.png"
  );
  const [subfoto2, setsubFoto2] = useState(
    "/images/produtos/capacetes/mtbtext/azulpt3.png"
  );

  function mudarCor(cor, foto, subfoto, subfoto2) {
    setCor(cor);
    setFoto(foto);
    setsubFoto(subfoto);
    setsubFoto2(subfoto2);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        CAPACETES:
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
              <p>CAPACETE MTB LINE {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azulpt}
                onClick={() =>
                  mudarCor(
                    "PRETO E AZUL",
                    "/images/produtos/capacetes/mtbtext/azulpt.png",
                    "/images/produtos/capacetes/mtbtext/azulpt2.png",
                    "/images/produtos/capacetes/mtbtext/azulpt3.png"
                  )
                }
              ></div>

              <div
                className={styles.brancorosa}
                onClick={() =>
                  mudarCor(
                    "BRANCO E ROSA",
                    "/images/produtos/capacetes/mtbtext/brancorosa.png",
                    "/images/produtos/capacetes/mtbtext/brancorosa2.png",
                    "/images/produtos/capacetes/mtbtext/brancorosa3.png"
                  )
                }
              ></div>
              <div
                className={styles.cinzapt}
                onClick={() =>
                  mudarCor(
                    "CINZA E PRETO",
                    "/images/produtos/capacetes/mtbtext/cinzapt.png",
                    "/images/produtos/capacetes/mtbtext/cinzapt2.png",
                    "/images/produtos/capacetes/mtbtext/cinzapt3.png"
                  )
                }
              ></div>
              <div
                className={styles.brancopt}
                onClick={() =>
                  mudarCor(
                    "BRANCO E PRETO",
                    "/images/produtos/capacetes/mtbtext/brancopt.png",
                    "/images/produtos/capacetes/mtbtext/brancopt2.png",
                    "/images/produtos/capacetes/mtbtext/brancopt3.png"
                  )
                }
              ></div>

              <div
                className={styles.ptcinza}
                onClick={() =>
                  mudarCor(
                    "PRETO E CINZA",
                    "/images/produtos/capacetes/mtbtext/ptcinza.png",
                    "/images/produtos/capacetes/mtbtext/ptcinza2.png",
                    "/images/produtos/capacetes/mtbtext/ptcinza3.png"
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "PRETO E ROSA",
                    "/images/produtos/capacetes/mtbtext/ptrosa.png",
                    "/images/produtos/capacetes/mtbtext/ptrosa2.png",
                    "/images/produtos/capacetes/mtbtext/ptrosa3.png"
                  )
                }
              ></div>
              <div
                className={styles.ptverde}
                onClick={() =>
                  mudarCor(
                    "PRETO E VERDE",
                    "/images/produtos/capacetes/mtbtext/ptverde.png",
                    "/images/produtos/capacetes/mtbtext/ptverde2.png",
                    "/images/produtos/capacetes/mtbtext/ptverde3.png"
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "PRETO E VERMELHO",
                    "/images/produtos/capacetes/mtbtext/ptvermelho.png",
                    "/images/produtos/capacetes/mtbtext/ptvermelho2.png",
                    "/images/produtos/capacetes/mtbtext/ptvermelho3.png"
                  )
                }
              ></div>
            </div>
            <div className={styles.subfotos}>
              <div
                onClick={() => setFoto(subfoto)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto} alt="Produto" className={styles.imgProd2} />
              </div>
              <div
                onClick={() => setFoto(subfoto2)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto2} className={styles.imgProd2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
