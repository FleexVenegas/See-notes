import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Image from "next/image";

function Signin() {
  const [credentials, setCredentials] = useState({
    created_user: "",
    created_email: "",
    created_password: "",
    created_password_comfirm: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    //const response = await axios.post("/api/auth/signin", credentials);
  };

  return (
    <div className={styles.sign__container}>
      <div className={styles.sign__card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <div className={styles.form__container}>
            <div className={styles.form__group}>
              <Input
                attribute={{
                  id: "created_user",
                  name: "created_user",
                  type: "text",
                  placeholder: " ",
                }}
                handleChange={handleChange}
              />
              <label className={styles.form__label}>User</label>
              <span className={styles.form__line}></span>
            </div>
            <div className={styles.form__group}>
              <Input
                attribute={{
                  id: "created_email",
                  name: "created_email",
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
                  id: "created_password",
                  name: "created_password",
                  type: "password",
                  placeholder: " ",
                }}
                handleChange={handleChange}
              />
              <label className={styles.form__label}>Password</label>
              <span className={styles.form__line}></span>
            </div>
            <div className={styles.form__group}>
              <Input
                attribute={{
                  id: "created_password_comfirm",
                  name: "created_password_comfirm",
                  type: "password",
                  placeholder: " ",
                }}
                handleChange={handleChange}
              />
              <label className={styles.form__label}>Comfirm password</label>
              <span className={styles.form__line}></span>
            </div>

            <button className={styles.form__btn}>Accept</button>
          </div>

          <Link href="/">
            <button className={styles.form__btn__cancelar}>Cancel</button>
          </Link>
        </form>
        <div className={styles.tips}>
          <div className={styles.tips__logo}>
            <Image src="/tips.png" alt="tips logo" height={100} width={100} />
          </div>
          <div className={styles.tips__cards}>
          <h4>¡Some tips for a safe registration!</h4>
            <ul>
            
              <li>
                <p>Password must be at least 7 characters</p>
              </li>
              <li>
                <p>The password must have at least one number</p>
              </li>
              <li>
                <p>The email must be valids.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
