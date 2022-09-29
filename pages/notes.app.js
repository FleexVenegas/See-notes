import React, { useState } from "react";
import NotesLayout from "../components/layout.notes";
import styles from "../styles/notesBody.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

export default function NotesApps({ notas }) {
  return (
    <>
      <Head>
        <title>Create New Notes</title>
      </Head>
      <div className={styles.notes__body}>
        <NotesLayout />

        <div className={styles.notes__}>
          <h1 className={styles.notes__title}>My notes</h1>
          <div className={styles.notes__subBody}>
            {notas.map((nota) => (
              <Link key={nota.id} href={`/notes/${nota.id}`}>
                <a className={styles.notes__card}>
                  <h1>{nota.title}</h1>
                  <p>{nota.description}</p>
                  <p>{nota.createAT}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.notes__add}>
        <Link href="/new-notes">
          <label>
            <Image src="/mas.png" alt="signo mas" height={70} width={70} />
          </label>
        </Link>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // const { data: notas } = await axios.get("http://localhost:3001/api/addnotes");
  const { data: notas } = await axios.get(
    "https://apps-notes.herokuapp.com/api/addnotes"
  );
  return {
    props: {
      notas,
    },
  };
};
