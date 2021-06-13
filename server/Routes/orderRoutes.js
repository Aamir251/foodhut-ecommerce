import express from 'express';
import { addOrderItems, getMyOrders, getOrderDetails, updateOrderToPaid } from '../controller/order.js'
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router()


router.post("/", protect, addOrderItems)
router.get("/myorders", protect, getMyOrders)
router.get("/:id", protect, getOrderDetails)
router.put("/:id/pay", protect, updateOrderToPaid)

export default router;

