// routes/diagnose.js
import {Router} from  "express";
import{ diagnoseGet,diagnosePost,diagnoseProtectedPost,faqGet,aboutGet } from '../controllers/diagnoseController.js';
import { requireAuth,checkUser } from '../middleware/authMiddleware.js';
const router = Router();

router.get("/diagnose", diagnoseGet);
router.get("/faq", faqGet);
router.get("/about", aboutGet);

router.post("/diagnose", diagnosePost);
router.post("/protecteddiagnose",requireAuth,checkUser, diagnoseProtectedPost);

export default router;