import { Router } from "express";
import { indexController } from "../controllers/indexController";
const router: Router=Router();
router.get('/saludo',indexController.index)
export default router;