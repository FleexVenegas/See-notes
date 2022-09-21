// Creación de la conexion a la base de datos

import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "noteapp",
});

export { pool };
