import { Router } from "express";
import { usersController } from "../controllers/userControllers";

const router: Router = Router();
router.get('/getusers', usersController.getUsers)
 router.post('/postuser',usersController.postUser );
router.delete('/deleteuser/:id',usersController.deleteUser);
router.get('/getuser/:id',usersController.getOneUser);
router.put('/edituser/:id',usersController.putUser);
export default router;