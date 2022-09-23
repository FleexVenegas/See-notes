import { pool } from "../../../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handle(req, res) {
  const { email, password } = req.body;

  const [result] = await pool.query(
    "SELECT username, email, clave FROM registration WHERE email=?",
    email
  );

  if (result.length === 0) {
    return res.json({ status: "401" });
  }

  const dbUsername = result[0].username;
  const dbEmail = result[0].email;
  const dbPassword = result[0].clave;
  const bcryPassword = await bcrypt.compare(password, dbPassword);

  if (email === dbEmail && bcryPassword) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: dbEmail,
        username: dbUsername,
      },
      "secret"
    );

    const serealized = serialize("mytoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 + 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-cookie", serealized);
    return res.status(200).json({ estado: "LOGIN SUCCESFULLY" });
  } else {
    return res.json({ status: "401" });
  }
}
