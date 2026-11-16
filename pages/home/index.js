import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.section}>
      <div className={styles.text__container}>
        <h1 className={styles.h1}>Bem vindos ao TabNews clone</h1>
        <p className={styles.p}>
          Em breve você tera noticias fresquinhas sobre os novos posts e acontecimentos.
          Estamos contruindo algo novo por aqui para voce.
        </p>
      </div>
    </div>
  );
}

export default Home;
