import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import axios from "axios";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();

  const [title, setTitle] = useState("Log In");
  const [estado, setEstado] = useState(true);

  const [credentialsLogin, setCredentialsLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentialsLogin({
      ...credentialsLogin,
      [e.target.name]: e.target.value,
    });
    setTitle("Log In");
    setEstado(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", credentialsLogin);

    if (response.data.status === "401") {
      const error = "Your email or password is incorrect";
      setTitle(error);
      setEstado(false);
    } else if (response.status === 200) {
      router.push("/notes.app");
    }
  };
  return (
    <div className={styles.sign__container}>
      <form className={styles.form__login}>
        <h1 className={ estado ? styles.sign__title : styles.sign__error }>
          {title}
        </h1>
        <Image
          src="/Logo-login.png"
          alt="logo login"
          height={150}
          width={170}
        />

        <div className={styles.form__container}>
          <div className={styles.form__group}>
            <Input
              attribute={{
                id: "email",
                name: "email",
                type: "email",
                placeholder: " ",
              }}
              handleChange={handleChange}
            />
            <label className={styles.form__label}>Email</label>
            <span className={styles.form__line}></span>
          </div>
          <div className={styles.form__group}>
            <Input
              attribute={{
                id: "password",
                name: "password",
                type: "password",
                placeholder: " ",
              }}
              handleChange={handleChange}
            />
            <label className={styles.form__label}>Password</label>
            <span className={styles.form__line}></span>
          </div>
          <button className={styles.form__btn} onClick={handleSubmit}>
            Aceptar
          </button>
        </div>
        <Link href="/">
          <button className={styles.form__btn__cancelar}>Cancelar</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
