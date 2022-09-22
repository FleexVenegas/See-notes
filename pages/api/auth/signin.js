// Guardamos los datos que nos llega de axios a la base de datos

import { pool } from "../../../config/db";
import bcrypt from "bcryptjs";

export default async function handle(req, res) {
  switch (req.method) {
    case "POST":
      return await SaveUsers(req, res);
  }
}

const SaveUsers = async (req, res) => {
  const { created_user, created_email, created_password } = req.body;

  //Encriptamos la contraseña
  let passwordHash = await bcrypt.hash(created_password, 8);

  const [result] = await pool.query("INSERT INTO registration SET ?", {
    username: created_user,
    email: created_email,
    clave: passwordHash,
  });

  return res.status(200).json({ estado: "REGISTRO EXITOSO" });
};
