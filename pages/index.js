import Layout from "../components/layout";
import styles from "../styles/body.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.index}>
        <Layout />
        <div className={styles.index__container}>
          <div className={styles.index__banner}>
            <Image
              src="/notas.png"
              alt="notas banner"
              height={450}
              width={450}
            />
          </div>
          <div className={styles.index__card}>
            <h2>¡La vida es facil con unas notas extras!</h2>
            <p>
              Cuando la vida se pone exitosa y deseas captuar los momentos más
              emocionantes que no deseas olvidar, este es un buen momentos para
              guardarlos. Utiliza nuestra pagina web para hacerlo, es facil y
              rapido. Sera un lugar seguro y confiable, no pierdas esta
              oportunidad. Es tan sencillo de hacerlo, solo tienes que hacer que
              suceda y comienza a guardar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
