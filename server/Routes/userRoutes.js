import express from 'express';
import { authUser, getUserProfile } from '../controller/users.js';
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()


router.post("/login", authUser)
router.get("/profile", protect, getUserProfile)


export default router;

