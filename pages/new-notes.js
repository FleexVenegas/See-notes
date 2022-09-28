import React, { useState } from "react";
import styles from "../styles/notesBody.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function NewNotes() {
  const router = useRouter();

  const [infoNotas, setInfoNotas] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setInfoNotas({
      ...infoNotas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = await axios.get("/api/profile");
    let id = profile.data.id;
    infoNotas.id = id;

    const response = await axios.post("/api/addnotes", infoNotas);
    if (response.status === 200) {
      router.push("/notes.app");
    }
  };
  return (
    <>
      <div className={styles.notes__bodyNew}>
        <form className={styles.notes__form} onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            className={styles.notes__input}
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
          />
          <label className={styles.notes__label}>Description</label>
          <textarea
            className={styles.notes__textArea}
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />

          <button className={styles.notes__btn}>Save</button>
        </form>
      </div>

      <div className={styles.notes__atras}>
        <Link href="/notes.app">
          <label>
            <Image
              src="/flecha-hacia-atras.png"
              alt="flecha atras"
              height={60}
              width={60}
            />
          </label>
        </Link>
      </div>
    </>
  );
}

export default NewNotes;
