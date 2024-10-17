/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Zap.module.css";

export default function Zap2() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511964657682&text=Olá%2C%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={styles.wp}
        src="/images/wpb.png"
        alt="Clique aqui para falar com a gente pelo Whatsapp!"
      />
    </a>
  );
}
