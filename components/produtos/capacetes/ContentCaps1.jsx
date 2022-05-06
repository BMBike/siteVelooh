import styles from "../../../styles/produtos/ContentProdutos.module.css"
import { useState } from "react";

export default function ContentCaps1() {
  const [cor, setCor] = useState("Azul");
  const [foto, setFoto] = useState("/images/Capazul.jfif");

  function mudarVermelho() {
    setCor("Vermelho");
    setFoto("/images/Capvermelho.jfif");
  }
  function mudarVerde() {
    setCor("Verde");
    setFoto("/images/Capverde.jfif");
  }
  function mudarPreto() {
    setCor("Preto");
    setFoto("/images/Cappreto.jfif");
  }
  function mudarAzul() {
    setCor("Azul");
    setFoto("/images/Capazul.jfif");
  }
  function mudarRosa() {
    setCor("Rosa");
    setFoto("/images/Caprosa.jfif");
  }
  return (
    <div className={styles.caps}>
      <h1 style={{ fontSize: "4rem", marginTop: "60px", marginLeft: "60px" }}>
        CAPACETES:
      </h1>
      <div className={styles.produtos}>
        <div className={styles.produto}>
          <div className={styles.Moldfoto}>
            <img src={foto} className={styles.imgProd} />
          </div>
          <div className={styles.lateral}>
            <div className={styles.texto}>
              <p>
                CAPACETE BABY {cor} FOSCO C/REGULAGEM 8 MESES A 4 ANOS - VELOOH
                BABY
              </p>
            </div>
            <div className={styles.cores}>
              <div className={styles.cor1} onClick={() => mudarAzul()}></div>
              <div className={styles.cor2} onClick={() => mudarPreto()}></div>
              <div
                className={styles.cor3}
                onClick={() => mudarVermelho()}
              ></div>
              <div className={styles.cor4} onClick={() => mudarRosa()}></div>
              <div className={styles.cor5} onClick={() => mudarVerde()}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
