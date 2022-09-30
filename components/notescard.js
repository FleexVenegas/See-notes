import styles from "../styles/notesBody.module.css";
import Link from 'next/link'

export function Notescard({nota}) {
  return (
    <Link key={nota.id} href={`/notes/${nota.id}`}>
      <a className={styles.notes__card}>
        <h1>{nota.title}</h1>
        <p>{nota.description}</p>
        <p>{nota.createAT}</p>
      </a>
    </Link>
  );
}
