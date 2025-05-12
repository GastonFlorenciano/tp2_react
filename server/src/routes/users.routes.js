import { Router } from "express";
import { validateUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/validate/:name", validateUser);

export default router;
