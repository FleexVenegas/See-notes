import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

function layout() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navbar_home}>Home</a>
        </Link>
        <ul className={styles.navbar_body}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a>Soport</a>
          </li>
        </ul>

        <Link href="/signin">
          <button className={styles.btn_login}>Sing In</button>
        </Link>

        <Link href="/login">
          <button className={styles.btn_login}>Log In</button>
        </Link>
      </nav>
    </div>
  );
}

export default layout;
