import styles from "../styles/Content.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Link from "next/link";

export default function ContentIndex() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.index}>
      <main className={styles.content}>
        <h1> VELOOH </h1>
        <p>Ajudando você a chegar mais longe</p>
        <div className={styles.carouselDiv}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            infinite={true}
            partialVisbile={false}
            autoPlay={true}
          >
            <a>
              <div className={styles.itemCarousel1}></div>
            </a>

            <a>
              <div className={styles.itemCarousel2}></div>
            </a>
            <a>
              <div className={styles.itemCarousel3}></div>
            </a>
             <a>
              <div className={styles.itemCarousel4}></div>
            </a>
          </Carousel>
        </div>

        {/*} <div className={styles.parallax2}>
          <h1>Sobre</h1>
        </div>

        <div className={styles.hist}>
          <h2>Nossa História</h2>
          <br />
          <p>
            O(A) BM Bike foi fundado(a) em 2000 com uma missão: trazer um(a)
            Loja de bicicletas de qualidade para a área de São Paulo. Nossa
            paixão por excelência é o que nos inspira desde o começo e continua
            nos motivando até hoje. Temos orgulho na experiência de compra que
            oferecemos e nos relacionamentos de longo prazo que construímos com
            nossos clientes. Venha nos visitar e veja por com seus próprios
            olhos!
          </p>
  </div> */}
        <div className={styles.produtos}>
          <div className={styles.wrapper}>
            <div className={styles.productImg1}></div>
            <div className={styles.productImg2}></div>
            <div className={styles.productImg3}></div>
          {/*<div className={styles.productImg4}></div>*/}
            <div className={styles.productsContent}>
              <h2>Velooh</h2>
              <p>A qualidade que você merece</p>
              <Link href="/velooh">
                <a className={styles.visitar}>Visitar</a>
              </Link>
            </div>
            <div className={styles.productsContent}>
              <h2>Gancheiras</h2>
              <p>Os preferidos dos clientes</p>
              <Link href="/produtos/gancheiras/1">
                <a className={styles.visitar}>Visitar</a>
              </Link>
            </div>
            <div className={styles.productsContent}>
              <h2>Vestuário</h2>
              <p>Qualidade sem igual</p>
              <Link href="/produtos/vestuario">
                <a className={styles.visitar}>Visitar</a>
              </Link> 
              </div>
            {/*<div className={styles.productsContent}>
              <h2>Bicicletas</h2>
              <p>Pedale com estilo e conforto!</p>
              <Link href="/produtos/bicicletas">
                <a className={styles.visitar}>Visitar</a>
              </Link>*/}
          </div>
        </div>
        <div className={styles.horario}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3>Horário de funcionamento</h3>
          <p>Segunda - Sexta : 7:00 - 18:00</p>
        </div>
        <div className={styles.endereco}>
          <h1>
            Entre em<span style={{ color: "#0081ac" }}> contato</span>
          </h1>
          <p>Rodovia Vice Prefeito Hermenegildo Tonoli, 2995, São Roque Da Chave, Itupeva-SP</p>
          <p>atendimento@bmbike.com.br</p>
          <p>Tel:(11) 4591-4101</p>
        </div>
      </main>
    </div>
  );
}
