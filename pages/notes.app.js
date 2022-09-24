import React, { useState } from "react";

import styles from "../styles/notes.module.css";
import NotesLayout from '../components/layout.notes'

function NotesApps() {
  return (
    <>
      
      <div className={styles.notes__body}>
        <NotesLayout/>
        <h1>Deshboard</h1>
      </div>
    </>
  );
}

export default NotesApps;
