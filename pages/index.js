import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout />
      <div className={styles.container__banner}>
        <div className={styles.index__banner}>
          <Image
            src="/notas.png"
            alt="notas banner"
            height={812}
            width={812}
          />
        </div>
        <div className={styles.index__info}>
          <h2>¡La vida es facil con unas notas extras!</h2>

          <div className={styles.index__parrafo}>
            <p>
              Cuando la vida se pone exitosa y deseas captuar los momentos más
              emocionantes que no deseas olvidar, este es un buen momentos para
              guardarlos. Utiliza nuestra pagina web para hacerlo, es facil y rapido.  
              Sera un lugar seguro y confiable, no pierdas esta oportunidad. Es tan 
              sencillo de hacerlo, solo tienes que hacer que suceda y comienza a guardar.
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Hola mundo</p>
      </footer>
    </>
  );
}
