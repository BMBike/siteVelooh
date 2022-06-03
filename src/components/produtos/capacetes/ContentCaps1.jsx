import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps1() {
  const [cor, setCor] = useState("AZUL FOSCO");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/capacete1/Capazul.jfif"
  );
  const [subfoto, setsubFoto] = useState("/images/produtos/capacetes/capacete1/03171299.png");
  const [subfoto2, setsubFoto2] = useState("/images/produtos/capacetes/capacete1/03171299(1).png");

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
              <p>
                CAPACETE BABY {cor} C/REGULAGEM 8 MESES A 4 ANOS - VELOOH
                BABY
              </p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "AZUL FOSCO",
                    "/images/produtos/capacetes/capacete1/Capazul.jfif",
                    "/images/produtos/capacetes/capacete1/03171299.png",
                    "/images/produtos/capacetes/capacete1/03171299(1).png",
                    
                  )
                }
              ></div>
              <div
                className={styles.preto}
                onClick={() =>
                  mudarCor(
                    "GRAFITE/PTO FOSCO",
                    "/images/produtos/capacetes/capacete1/Cappreto.jfif",
                    "/images/produtos/capacetes/capacete1/03175099(3).png",
                    "/images/produtos/capacetes/capacete1/03175099(2).png"
                  )
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "LARANJA FOSCO",
                    "/images/produtos/capacetes/capacete1/Capvermelho.jfif",
                    "/images/produtos/capacetes/capacete1/download.jpg",
                    "/images/produtos/capacetes/capacete1/03172199(2).png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA FOSCO",
                    "/images/produtos/capacetes/capacete1/Caprosa.jfif",
                    "/images/produtos/capacetes/capacete1/03172499(3).png",
                    "/images/produtos/capacetes/capacete1/03172499(2).png"
                  )
                }
              ></div>
              <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "VERDE FOSCO",
                    "/images/produtos/capacetes/capacete1/Capverde.jfif",
                    "/images/produtos/capacetes/capacete1/03192799(3).png",
                    "/images/produtos/capacetes/capacete1/03192799(3).png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA FOSCO SKY ",
                    "/images/produtos/capacetes/capacete1/03175199(1).png",
                    "/images/produtos/capacetes/capacete1/03175199(3).png",
                    "/images/produtos/capacetes/capacete1/03175199.png",
                  )
                }
              ></div>
              <div
                className={styles.azul}
                style={{marginLeft:"15px"}}
                onClick={() =>
                  mudarCor(
                    "TOYS AZUL FOSCO",
                    "/images/produtos/capacetes/capacete1/03191299(1).png",
                    "/images/produtos/capacetes/capacete1/03191299(2).png",
                    "/images/produtos/capacetes/capacete1/03191299(3).png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "TOYS VERMELHO FOSCO",
                    "/images/produtos/capacetes/capacete1/03190899(2).png",
                    "/images/produtos/capacetes/capacete1/03190899(3).png",
                    "/images/produtos/capacetes/capacete1/03190899(1).png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "UNICÓRNIO ROSA FOSCO",
                    "/images/produtos/capacetes/capacete1/03182499(1).png",
                    "/images/produtos/capacetes/capacete1/03182499(2).png",
                    "/images/produtos/capacetes/capacete1/03182499.png",
                  )
                }
              ></div>
              <div
                className={styles.roxo}
                onClick={() =>
                  mudarCor(
                    "UNICÓRNIO ROXO FOSCO ",
                    "/images/produtos/capacetes/capacete1/03185299(2).png",
                    "/images/produtos/capacetes/capacete1/03185299(3).png",
                    "/images/produtos/capacetes/capacete1/03185299.png",
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
