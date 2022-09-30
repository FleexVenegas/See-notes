import React from "react";
import axios from "axios";
import styles from "../../styles/notasEditDel.module.css";
import stylesSub from "../../styles/notesBody.module.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function ViewNotes({ notas }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/addnotes/" + id);
      toast.success("Notes deleted successfully");
      router.push("/notes.app");
    } catch (error) {
      toast.error("Error deleting notes");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.notas__body}>
        <div className={styles.notas__central}>
          <div className={styles.notes__card}>
            <h1>{notas.title}</h1>
            <p>{notas.description}</p>
            <p>{notas.createAT}</p>
            <label onClick={() => handleDelete(notas.id)}>
              <Image
                src="/boton-eliminar.png"
                alt="logo-delete"
                height={40}
                width={40}
              />
            </label>

            <label
              className={styles.notas__edit}
              onClick={() => router.push("/notes/edit/" + notas.id)}
            >
              <Image
                src="/editar.png"
                alt="logo-delete"
                height={40}
                width={40}
              />
            </label>
          </div>
        </div>
      </div>
      <div className={stylesSub.notes__atras}>
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

export const getServerSideProps = async (ctx) => {
  // const { data: notas } = await axios.get(
  //   "http://localhost:3001/api/addnotes/" + ctx.query.id
  // );
  const { data: notas } = await axios.get(
    "https://apps-notes.herokuapp.com/api/addnotes/" + ctx.query.id
  );
  return {
    props: {
      notas,
    },
  };
};

export default ViewNotes;
