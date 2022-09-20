import styles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__cinte}>
            <div className={styles.header__logo}>
              <Link href="/">
                <a>
                  <Image
                    src="/icon.png"
                    alt="icon principal"
                    height={60}
                    width={60}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.links}>
              <Link href="/about">
                <a className={styles.header__btn}>About</a>
              </Link>
              <a className={styles.header__btn}>Contact</a>
            </div>
          </div>

          <div className={styles.header__logins}>
            <div className={styles.logins__a}>
              <Link href="/login">
                <a className={styles.a__logiN}>Sign In</a>
              </Link>

              <Link href="/signin">
                <a className={styles.a__logiN}>Sign Up</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
