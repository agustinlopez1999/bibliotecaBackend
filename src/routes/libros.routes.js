import { Router } from "express";
import {
  getLibros,
  getLibro,
  postLibros,
  updateLibros,
  deleteLibros,
} from "../controllers/libros.controller.js";

const router = Router();

//get
router.get("/libros", getLibros);
router.get("/libros/:id", getLibro);
//post
router.post("/libros", postLibros);
//put
router.put("/libros/:id", updateLibros);
//delete
router.delete("/libros/:id", deleteLibros);

export default router;
