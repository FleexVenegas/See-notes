import React, { useState } from "react";
import NotesLayout from "../components/layout.notes";
import styles from "../styles/notesBody.module.css";
import Image from "next/image";
import Link from "next/link";

function NotesApps() {
  return (
    <>
      <div className={styles.notes__body}>
        <NotesLayout />
        <div className={styles.notes__subBody}>
          <div className={styles.notes__notas}>
          </div>

          <div className={styles.notes__add}>
            <Link href="/new-notes">
              <label>
                <Image
                  src="/mas.png"
                  alt="signo mas"
                  height={90}
                  width={90}
                />
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesApps;
