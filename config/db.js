// Creación de la conexion a la base de datos

import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "noteapp",
});


//ESTOS SON LOS PARAMETROS PARA UNA CONEXION A LA BASE DE DATOS EN LA NUBE.

// const pool = createPool({
//   host: "us-east.connect.psdb.cloud",
//   user: "q32f1m71vt12hmnap93x",
//   password: "pscale_pw_IV4v0c0rQ8FrN7D95yc7wRdpwhxU8j22NlzgBuAIVj3",
//   database: "noteapp",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

export { pool };
