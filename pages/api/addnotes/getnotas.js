import { pool } from "../../../config/db"

export default async function getNotasHandle(req, res){
    console.log(req.body)

    const { id } = req.body
    console.log(id)

    return res.status(200).json(id)
}