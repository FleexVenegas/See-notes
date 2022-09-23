import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from '../styles/notes.module.css'

function NotesApps() {
  const router = useRouter();
  const [user, setUSer] = useState();

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
    <div>
      <h1>Deshboard</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={() => getProfile()}>Get profile</button>

      <button onClick={() => logout()}>Log Out</button>
    </div>
  );

}

export default NotesApps;
