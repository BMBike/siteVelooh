/* eslint-disable @next/next/no-img-element */
import styles from "../styles/ContentVelooh.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ContentVelooh() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.velooh}>
      <div className={styles.veloohSobre}>
        <div className={styles.veloohImg}></div>
        <div className={styles.veloohText}>
          <h1>Velooh</h1>
          <h3>A qualidade que você merece!</h3>
          <p>
            Estes itens não são apenas da mais alta qualidade, mas também vêm em
            uma variedade de opções para atender as suas necessidades. Para mais
            detalhes, entre em contato conosco!
          </p>
        </div>
      </div>
      <div className={styles.caps}>
        <h1>Nosso Estoque</h1>
        <h3>A qualidade que você merece!</h3>
      </div>
      {/*<div className={styles.carousel}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          partialVisbile={false}
          showDots={true}
          itemClass={"itemCarousel"}
        >
          <center>
            <img
              src={"/images/c1.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
          <center>
            <img
              src={"/images/c2.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
          <center>
            <img
              src={"/images/c3.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
          <center>
            <img
              src={"/images/c4.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
          <center>
            <img
              src={"/images/c5.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
          <center>
            <img
              src={"/images/c6.png"}
              width="500px"
              height="500px"
              alt="produtos"
            />
          </center>
        </Carousel>
  </div>*/}
      <div className={styles.carouselDiv}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          partialVisbile={false}
          autoPlay={true}
          showDots={true}
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
          <a>
            <div className={styles.itemCarousel5}></div>
          </a>
          <a>
            <div className={styles.itemCarousel6}></div>
          </a>
        </Carousel>
      </div>
      <div className={styles.endereco}>
        <h1>
          Entre em<span style={{ color: "#0081ac" }}> contato</span>
        </h1>
        <p>Rodovia Vice Prefeito Hermenegildo Tonoli, 2995, São Roque Da Chave, Itupeva-SP</p>
        <p>atendimento@bmbike.com.br</p>
        <p>Tel:(11) 4591-4101</p>
      </div>
    </div>
  );
}
