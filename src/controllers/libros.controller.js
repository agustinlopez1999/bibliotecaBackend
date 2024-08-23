import { pool } from "../db.js";

export const getLibros = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM libro");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funciono",
    });
  }
};

export const getLibro = async (req, res) => {
  const idReq = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM libro WHERE id = ?", [
      idReq,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Libro no encontrado" });
    else res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funciono",
    });
  }
};

export const getTitulo = async (req, res) => {
  const titleReq = `%${req.params.title}%`;
  try {
    const [rows] = await pool.query("SELECT * FROM libro WHERE title LIKE ?", [
      titleReq,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "No se encontraron resultados" });
    else res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funcionó",
    });
  }
};

export const postLibros = async (req, res) => {
  const { title, author, genre, cover, language } = req.body;
  try {
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
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funciono",
    });
  }
};

export const deleteLibros = async (req, res) => {
  const idReq = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM libro WHERE id = ?", [
      idReq,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Libro no encontradoo" });
    else res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funciono",
    });
  }
};

export const updateLibros = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, language, cover } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE libro SET title = IFNULL(?, title), author = IFNULL(?, author), genre = IFNULL(?, genre), language = IFNULL(?, language), cover = IFNULL(?, cover) WHERE id =?",
      [title, author, genre, language, cover, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Libro no encontrado" });

    const [rows] = await pool.query("SELECT * FROM libro WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo no funciono",
    });
  }
};
