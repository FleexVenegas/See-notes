import React from "react";
import styles from "../styles/notesBody.module.css";
import Image from "next/image";
import Link from "next/link";

function NewNotes() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.notes__bodyNew}>
        <form className={styles.notes__form} onSubmit={handleSubmit}>
          <label>Title</label>
          <input className={styles.notes__input} />
          <label className={styles.notes__label}>Description</label>
          <textarea className={styles.notes__textArea} />

          <button className={styles.notes__btn}>Save</button>
        </form>
      </div>

      <div className={styles.notes__atras}>
        <Link href="/notes.app">
          <Image
            src="/flecha-hacia-atras.png"
            alt="flecha atras"
            height={60}
            width={60}
          />
        </Link>
      </div>
    </>
  );
}

export default NewNotes;
