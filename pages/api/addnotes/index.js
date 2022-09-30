import axios from "axios";
import { pool } from "../../../config/db";

export default async function addNotesHandle(req, res) {
  switch (req.method) {
    case "GET":
      return await GetAddNotes(req, res);
    case "POST":
      return await SaveAddNotes(req, res);
  }
}

const GetAddNotes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM addnotas");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const SaveAddNotes = async (req, res) => {
  const { title, description, id } = req.body;

  try {
    await pool.query("INSERT INTO addnotas set ?", {
      title,
      description,
      user_id: id,
    });
    return res.status(200).json({ message: "Notas agregadas!", id });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
