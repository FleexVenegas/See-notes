import { pool } from "../../../config/db";

export default async function handle(req, res) {
  switch (req.method) {
    case "GET":
      return await GetNotes(req, res);
    case "DELETE":
      return await DeleteNotes(req, res);

    case "PUT":
      return await UpdateNotes(req, res);

    default:
      break;
  }
}

const GetNotes = async (req, res) => {
  try {
    const { id } = req.query;
    const [result] = await pool.query("SELECT * FROM addnotas WHERE id = ?", [
      id,
    ]);

    return res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
  }
};

const DeleteNotes = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query("DELETE FROM addnotas WHERE id = ?", [id]);
  return res.status(204).json();
};

const UpdateNotes = async (req, res) => {
  const { id } = req.query;
  const { title, description } = req.body;
  try {
    await pool.query(
      "UPDATE addnotas SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    return res.status(204).json();
  } catch (error) {
    console.log(error.message);
  }
};
