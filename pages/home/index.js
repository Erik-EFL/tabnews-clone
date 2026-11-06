import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.section}>
      <div className={styles.text__container}>
        <h1 className={styles.h1}>Bem vindos ao TabGames</h1>
        <p className={styles.p}>
          Em breve voce tera noticias fresquinhas sobre os novos jogos que estao
          chegando!

          Estamos contruindo algo novo por aqui para voce.
        </p>
      </div>
    </div>
  );
}

export default Home;
