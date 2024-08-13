import { pool } from "../db.js";

export const getLibros = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM libro");
  res.json(rows);
};

export const getLibro = async (req, res) => {
  const idReq = req.params.id;
  const [rows] = await pool.query("SELECT * FROM libro WHERE id = ?", [idReq]);
  if (rows.length <= 0)
    return res.status(404).json({ message: "Libro no encontrado" });
  else res.json(rows[0]);
};

export const postLibros = async (req, res) => {
  const { title, author, genre, cover, language } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO libro(title, author, genre, cover, language) VALUES (?, ?, ?, ?, ?)",
    [title, author, genre, cover, language]
  );
  res.send({
    id: rows.insertId,
    title,
    author,
    genre,
    language,
    cover,
  });
};

export const deleteLibros = async (req, res) => {
  const idReq = req.params.id;
  const [result] = await pool.query("DELETE FROM libro WHERE id = ?", [idReq]);
  if (result.affectedRows <= 0)
    return res.status(404).json({ message: "Libro no encontradoo" });
  else res.sendStatus(204);
};

export const updateLibros = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, language, cover } = req.body;
  console.log(id, title, author, genre, language, cover);
  const [result] = await pool.query(
    "UPDATE libro SET title = ?, author = ?, genre = ?, language = ?, cover = ? WHERE id =?",
    [title, author, genre, language, cover, id]
  );
  res.json("received");
};
