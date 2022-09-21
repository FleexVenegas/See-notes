// Guardamos los datos que nos llega de axios a la base de datos

import { pool } from '../../../config/db'

export default function handle(req, res){
    console.log(req.body)
}