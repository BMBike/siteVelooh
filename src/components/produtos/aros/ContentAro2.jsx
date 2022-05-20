import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentAro2() {
  const [cor, setCor] = useState("Azul");
  const[tam, setTam] = useState("29");
  const [foto, setFoto] = useState(
    "/images/produtos/aros/adesivo/azul.png"
  );
  const [subfoto, setsubFoto] = useState("/images/produtos/aros/adesivo/azul2.png");
  const [subfoto2, setsubFoto2] = useState("/images/produtos/aros/adesivo/azul3.png");
  const [subfoto3, setsubFoto3] = useState("/images/produtos/aros/adesivo/azul4.png");
  function mudarCor(cor, foto, tam, f1,f2,f3) {
    setCor(cor);
    setFoto(foto);
    setTam(tam)
    setsubFoto(f1)
    setsubFoto2(f2)
    setsubFoto3(f3)
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        AROS:
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
                ARO aero 36f disco pto c/adesivo {cor}  
              </p>
            </div>
            <div className={styles.cores}>
            <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "Azul",
                    "/images/produtos/aros/adesivo/azul.png",
                    "29",
                    "/images/produtos/aros/adesivo/azul2.png",
                    "/images/produtos/aros/adesivo/azul3.png",
                    "/images/produtos/aros/adesivo/azul4.png",
                  )
                }
              ></div>
              <div
                className={styles.amarelo}
                onClick={() =>
                  mudarCor(
                    "amarelo",
                    "/images/produtos/aros/adesivo/amarelo.png",
                    "29",
                    "/images/produtos/aros/adesivo/amarelo2.png",
                    "/images/produtos/aros/adesivo/amarelo3.png",
                    "/images/produtos/aros/adesivo/amarelo4.png",
                  )
                }
              ></div>
              <div
                className={styles.cinza}
                onClick={() =>
                  mudarCor(
                    "cinza",
                    "/images/produtos/aros/adesivo/cinza.png",
                    "29",
                    "/images/produtos/aros/adesivo/cinza2.png",
                    "/images/produtos/aros/adesivo/cinza3.png",
                    "/images/produtos/aros/adesivo/cinza4.png",
                  )
                }
              ></div>
              <div
                className={styles.laranja}
                onClick={() =>
                  mudarCor(
                    "laranja",
                    "/images/produtos/aros/adesivo/laranja.png",
                    "29",
                    "/images/produtos/aros/adesivo/laranja2.png",
                    "/images/produtos/aros/adesivo/laranja3.png",
                    "/images/produtos/aros/adesivo/laranja4.png",
                  )
                }
              ></div>
              <div
                className={styles.polido}
                onClick={() =>
                  mudarCor(
                    "prata",
                    "/images/produtos/aros/adesivo/prata.png",
                    "29",
                    "/images/produtos/aros/adesivo/prata2.png",
                    "/images/produtos/aros/adesivo/prata3.png",
                    "/images/produtos/aros/adesivo/prata4.png",
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "rosa",
                    "/images/produtos/aros/adesivo/rosa.png",
                    "29",
                    "/images/produtos/aros/adesivo/rosa2.png",
                    "/images/produtos/aros/adesivo/rosa3.png",
                    "/images/produtos/aros/adesivo/rosa4.png",
                  )
                }
              ></div>
              <div
                className={styles.verde}
                onClick={() =>
                  mudarCor(
                    "verde",
                    "/images/produtos/aros/adesivo/verde.png",
                    "29",
                    "/images/produtos/aros/adesivo/verde2.png",
                    "/images/produtos/aros/adesivo/verde3.png",
                    "/images/produtos/aros/adesivo/verde4.png",
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "vermelho",
                    "/images/produtos/aros/adesivo/vermelho.png",
                    "29",
                    "/images/produtos/aros/adesivo/vermelho2.png",
                    "/images/produtos/aros/adesivo/vermelho3.png",
                    "/images/produtos/aros/adesivo/vermelho4.png",
                  )
                }
              ></div>
              <div
                className={styles.grafite}
                onClick={() =>
                  mudarCor(
                    "grafite",
                    "/images/produtos/aros/adesivo/grafite.png",
                    "29",
                    "/images/produtos/aros/adesivo/grafite2.png",
                    "/images/produtos/aros/adesivo/grafite3.png",
                    "/images/produtos/aros/adesivo/grafite4.png",
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
              <div
                onClick={() => setFoto(subfoto3)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto3} className={styles.imgProd2} />
              </div>
            </div>
            <div className={styles.texto2}>
            <p> TAMANHOS: {tam}</p>
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  );
}
