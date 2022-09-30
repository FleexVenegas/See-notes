import React, { useEffect, useState } from "react";
import styles from "../styles/notesBody.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

function NewNotes() {
  const router = useRouter();

  const [infoNotas, setInfoNotas] = useState({
    title: "",
    description: "",
  });

  const [update, setUpdate] = useState(true);
  const [title, setTitle] = useState("Save");

  const handleChange = (e) => {
    setInfoNotas({
      ...infoNotas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        await axios.put("/api/addnotes/" + router.query.id, infoNotas);
        toast.success("Notes updated successfully")
      } else {
        const profile = await axios.get("/api/profile");
        let id = profile.data.id;
        infoNotas.id = id;
        await axios.post("/api/addnotes", infoNotas);
        toast.success("Notes created successfully")
      }

      router.push("/notes.app");
    } catch (error) {
      
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/api/addnotes/" + router.query.id);
      setInfoNotas(data);
      setUpdate(false);
      setTitle("Update");
    };

    if (router.query.id) {
      getProduct(router.query.id);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className={styles.notes__bodyNew}>
        <form className={styles.notes__form} onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            className={styles.notes__input}
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={infoNotas.title}
          />
          <label className={styles.notes__label}>Description</label>
          <textarea
            className={styles.notes__textArea}
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            value={infoNotas.description}
          />

          <button
            className={update ? styles.notes__btn : styles.notes__btn__update}
          >
            {title}
          </button>
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
