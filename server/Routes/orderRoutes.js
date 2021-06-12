import express from 'express';
import { addOrderItems, getOrderDetails } from '../controller/order.js'
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router()


router.post("/", protect, addOrderItems)
router.get("/:id", protect, getOrderDetails)

export default router;

