import { pool } from "../../../config/db";

export default async function handle(req, res) {
  switch (req.method) {
    case "GET":
      return await GetNotes(req, res);
    case "DELETE":
      return await DeleteNotes(req, res);

    default:
      break;
  }
}

const GetNotes = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query("SELECT * FROM addnotas WHERE id = ?", [
    id,
  ]);

  return res.status(200).json(result[0]);
};

const DeleteNotes = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query("DELETE FROM addnotas WHERE id = ?", [id]);
  return res.status(204).json();
};
