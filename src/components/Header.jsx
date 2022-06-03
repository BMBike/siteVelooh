/* eslint-disable @next/next/link-passhref */
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        {/*<h1 className={styles.title}> VELOH </h1>*/}
        <a>
          <div className={styles.logo}></div>
        </a>
      </Link>

      <nav>
        <ul>
          <Link href="/sobre">
            <li>
              <a>EMPRESA</a>
            </li>
          </Link>
          <Link href="/contato">
            <li>
              <a>CONTATO</a>
            </li>
          </Link>
          <div className={styles.dropdown}>
            <li>
              <a>VELOOH</a>
            </li>
            <div className={styles.dropdownContent}>
              <h3
                style={{
                  color: "rgb(0, 129, 172)",
                  fontWeight: "normal",
                  fontSize: "1.4rem",
                }}
              >
                PRODUTOS
              </h3>
              <hr />
              <Link href="/produtos/acessorios/">
                <p>Acessórios</p>
              </Link>
              <Link href="/produtos/aros/">
                <p>Aros</p>
              </Link>

              <Link href="/produtos/capacetes/">
                <p>Capacetes</p>
              </Link>
              <Link href="/produtos/gancheiras/1">
                <p>Gancheiras</p>
              </Link>
              <Link href="/produtos/pecas">
                <p>Peças</p>
              </Link>

              <Link href="/produtos/vestuario/">
                <p>Vestuário</p>
              </Link>
              <hr />
              <Link href="/velooh">
                <p>Sobre</p>
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
