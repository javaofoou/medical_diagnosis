import {Router} from "express";
import {signup,login,logout,signUpget,loginGet,dashboard} from "../controllers/authController.js";
import { requireAuth,checkUser } from '../middleware/authMiddleware.js';

const router = Router();

router.get("/signup",signUpget);
router.get("/login",loginGet);
router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",logout);
router.get('/dashboard',requireAuth,checkUser,dashboard);


export default router;