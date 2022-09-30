import React from "react";
import NotesLayout from "../components/layout.notes";
import styles from "../styles/notesBody.module.css";
import { Notescard } from "../components/notescard";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

export default function NotesApps({ notas }) {
  const renderNotes = () => {
    if (notas.length === 0){ return <h1>No Notes yet</h1>;}
    return notas.map((nota) => <Notescard key={nota.id} nota={nota} />);
  };
  return (
    <>
      <Head>
        <title>My Notes</title>
      </Head>
      <div className={styles.notes__body}>
        
        <NotesLayout />
        {/* <h1 className={styles.notes__title}>My Notes</h1> */}
        <div className={styles.notes__}>
          
          <div className={styles.notes__subBody}>{renderNotes()}</div>
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
  //const { data: notas } = await axios.get("http://localhost:3001/api/addnotes");
  const { data: notas } = await axios.get(
    "https://apps-notes.herokuapp.com/api/addnotes"
  );
  return {
    props: {
      notas,
    },
  };
};
