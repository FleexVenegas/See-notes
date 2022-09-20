import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Input from "./components/Input";
function Form() {
  const [credentialsLogin, setCredentialsLogin] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentialsLogin({
      ...credentialsLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentialsLogin)
  };
  return (
    <div className={styles.sign__container}>
      <form className={styles.form__login}>
        <h1>Log In</h1>

        <Image
          src="/logo-login.png"
          alt="logo login"
          height={150}
          width={170}
        />

        <div className={styles.form__container}>
          <div className={styles.form__group}>
            <Input
              attribute={{
                id: "user",
                name: "user",
                type: "text",
                placeholder: " ",
              }}
              handleChange={handleChange}
            />
            <label className={styles.form__label}>UserName</label>
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
