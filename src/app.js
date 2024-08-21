import express from "express";
import cors from "cors";
import librosRoutes from "./routes/libros.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500" })); //permite obtener datos de la base de datos
app.use(indexRoutes);
app.use("/api", librosRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontro la dirección",
  });
});

export default app;
