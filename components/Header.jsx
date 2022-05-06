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
              <a>Sobre</a>
            </li>
          </Link>
          <Link href="/contato">
            <li>
              <a>Contato</a>
            </li>
          </Link>
          <div className={styles.dropdown}>
            <Link href="/velooh">
              <li>
                <a>Velooh</a>
              </li>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/produtos/pecasBike">
                <p>Peças de bike</p>
              </Link>
              <Link href="/produtos/kitBike">
                <p>Kit bike</p>
              </Link>
              <Link href="/produtos/capacetes/">
                <p>Capacetes</p>
              </Link>
              <p>Em breve!</p>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
