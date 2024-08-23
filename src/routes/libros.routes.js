import { Router } from "express";
import {
  getLibros,
  getLibro,
  postLibros,
  updateLibros,
  deleteLibros,
  getTitulo,
} from "../controllers/libros.controller.js";

const router = Router();

//get
router.get("/libros", getLibros);
router.get("/libros/:id", getLibro);
router.get("/libros/search/:title", getTitulo);
//post
router.post("/libros", postLibros);
//put
router.patch("/libros/:id", updateLibros);
//delete
router.delete("/libros/:id", deleteLibros);

export default router;
