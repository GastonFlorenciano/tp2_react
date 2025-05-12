import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `¡Bienvenido, ${name}!` });
});

app.use("/", usersRoutes);


app.listen(3000, () => console.log("http://localhost:3000/"));
