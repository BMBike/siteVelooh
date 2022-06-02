import styles from "../styles/ContentSobre.module.css";

export default function ContentSobre() {
  return (
    <div className={styles.sobre}>
      <main className={styles.main}>
        <div className={styles.parallax2}>
          <h1>Sobre</h1>
        </div>

        <div className={styles.hist}>
          <h1>Nossa História</h1>
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
        </div>

        <div className={styles.imagem}>
          <h1>Origem da loja</h1>
        </div>
        <div className={styles.servico}>
          <h1>Serviço pessoal</h1>
          <p>
            Serviço pessoal No(a) BM Bike somos motivados pela nossa dedicação
            em oferecer um serviço superior e personalizado. Não podemos deixar
            de sorrir toda vez que alguém entra em nossa loja empolgado com
            nossa grande variedade de produtos e sai satisfeito. Isso significa
            que nosso trabalho foi bem-sucedido.
          </p>
          <p>
            Desde que fundamos nossa loja em 2000, temos um objetivo em mente:
            garantir uma variedade permanente de itens originais, além de
            edições únicas limitadas e mercadorias de temporada específicas que
            se enquadram a qualquer orçamento.
          </p>
          <p>
            Entre em contato conosco para saber mais sobre nossa loja ou venha
            nos conhecer pessoalmente!
          </p>
        </div>
      </main>
    </div>
  );
}
