import { Router } from "express";
import { rootHandler, validateUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/", rootHandler);
router.get("/validate/:name", validateUser);

export default router;
