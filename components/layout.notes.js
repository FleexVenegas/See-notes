import { useState } from "react";
import Imagen from "next/image";
import styles from "../styles/notes.module.css";
import axios from "axios";
import { useRouter } from "next/router";

function NotesLayout() {
  const router = useRouter();
  const [user, setUSer] = useState("");

  const getProfile = async () => {
    const response = await axios.get("/api/profile");
    setUSer(response.data);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
      router.push("/login");
    }
  };

  return (
    <>
      <header className={styles.notes__header}>
        <div className={styles.header__profile}>
          <label
            htmlFor="menu"
            onClick={() => getProfile()}
            className={styles.header__logoProfile}
          >
            <Imagen src="/usuario.png" alt="logo" height={40} width={40} />
          </label>

          <input
            type="checkbox"
            id="menu"
            className={styles.header__input}
            hidden
          />
          <div className={styles.header__menu}>
            <div className={styles.notes__changePhoto}>
              <div className={styles.notes__subChangePhoto}>
                <label>
                  <Imagen
                    src="/usuario.png"
                    alt="logo"
                    height={90}
                    width={90}
                  />
                </label>
              </div>
            </div>
            <div className={styles.notes__dates}>
              <div className={styles.notes__subDates}>
                <h3 className={styles.notes__content}> {user.username} </h3>
                <h3 className={styles.notes__content}>{user.email}</h3>
              </div>
            </div>
            <div className={styles.notes__btnLog}>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NotesLayout;
