import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentFita() {
  const [cor, setCor] = useState("130MM PTO");
  const [foto, setFoto] = useState("/images/produtos/pecas/0218.jpeg");

  function mudarCor(cor, foto) {
    setCor(cor);
    setFoto(foto);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        PEÇAS:
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
              <p>MANOPLA BORRACHA {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor("130MM PTO", "/images/produtos/pecas/0218.jpeg")
                }
              ></div>
              <div
                className={styles.azulpt}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/AZUL",
                    "/images/produtos/pecas/02260499.png"
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor("JET PRETO", "/images/produtos/pecas/02260199.png")
                }
              ></div>
              <div
                className={styles.ptlaranja}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/LARANJA",
                    "/images/produtos/pecas/02263899.png"
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/ROSA",
                    "/images/produtos/pecas/02264799.png"
                  )
                }
              ></div>
              <div
                className={styles.ptverde}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/VERDE",
                    "/images/produtos/pecas/02260699.png"
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/VERMELHO",
                    "/images/produtos/pecas/02263799.png"
                  )
                }
              ></div>
              <div
                className={styles.ptazulclaro}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/ACQUA",
                    "/images/produtos/pecas/022619824.png"
                  )
                }
              ></div>
              <div
                className={styles.ptamarelo}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/AMARELO",
                    "/images/produtos/pecas/02260324.png"
                  )
                }
              ></div>
              <div
                className={styles.cinzapt}
                onClick={() =>
                  mudarCor(
                    "JET PRETO/CINZA",
                    "/images/produtos/pecas/02260224.png"
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
