import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps4() {
  const [cor, setCor] = useState("RAIO AZUL FOSCO");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/kids/03091299.png"
  );
  const [subfoto, setsubFoto] = useState(
    "/images/produtos/capacetes/kids/03091299(3).png"
  );
  const [subfoto2, setsubFoto2] = useState(
    "/images/produtos/capacetes/kids/03091299(2).png"
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
              <p>CAPACETE KIDS {cor} C/REGULAGEM 4/12 ANOS</p>
            </div>
            <div className={styles.cores}>
              <div
                style={{ marginLeft: "0px" }}
                className={styles.ptazulclaro}
                onClick={() =>
                  mudarCor(
                    "RAIO AZUL FOSCO",
                    "/images/produtos/capacetes/kids/03091299.png",
                    "/images/produtos/capacetes/kids/03091299(3).png",
                    "/images/produtos/capacetes/kids/03091299(2).png"
                  )
                }
              ></div>
              <div
                className={styles.ptcinza}
                onClick={() =>
                  mudarCor(
                    "RAIO PRATA FOSCO",
                    "/images/produtos/capacetes/kids/03093199(3).png",
                    "/images/produtos/capacetes/kids/03093199.png",
                    "/images/produtos/capacetes/kids/03093199(1).png"
                  )
                }
              ></div>
              <div
                className={styles.ptrosa}
                onClick={() =>
                  mudarCor(
                    "RAIO ROSA FOSCO",
                    "/images/produtos/capacetes/kids/03092499(2).png",
                    "/images/produtos/capacetes/kids/03092499(3).png",
                    "/images/produtos/capacetes/kids/03092499.png"
                  )
                }
              ></div>

              <div
                className={styles.ptverde}
                onClick={() =>
                  mudarCor(
                    "RAIO VERDE FOSCO",
                    "/images/produtos/capacetes/kids/03092799(1).png",
                    "/images/produtos/capacetes/kids/03092799(3).png",
                    "/images/produtos/capacetes/kids/03092799(3).png"
                  )
                }
              ></div>
              <div
                className={styles.ptvermelho}
                onClick={() =>
                  mudarCor(
                    "RAIO VERMELHO FOSCO ",
                    "/images/produtos/capacetes/kids/03090899(1).png",
                    "/images/produtos/capacetes/kids/03090899(3).png",
                    "/images/produtos/capacetes/kids/03090899.png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA FOSCO",
                    "/images/produtos/capacetes/kids/030910524(1).png",
                    "/images/produtos/capacetes/capacete1/download.jpg",
                    "/images/produtos/capacetes/kids/030910524.png"
                  )
                }
              ></div>
              <div
                className={styles.verdeclaro}
                onClick={() =>
                  mudarCor(
                    "VERDE FOSCO",
                    "/images/produtos/capacetes/kids/verde.jpg",
                    "/images/produtos/capacetes/kids/verde2.jpg",
                    "/images/produtos/capacetes/kids/verde3.jpg"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA/BCO FOSCO ",
                    "/images/produtos/capacetes/kids/03095199(2).png",
                    "/images/produtos/capacetes/kids/03095199(1).png",
                    "/images/produtos/capacetes/kids/03095199.png"
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
