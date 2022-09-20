import React from "react";
import styles from "../styles/Home.module.css";

function Input({ attribute, handleChange }) {
  return (
    <>
      <input
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
        placeholder={attribute.placeholder}
        onChange={handleChange}
        required
        className={styles.form__input}
      />
    </>
  );
}

export default Input;
