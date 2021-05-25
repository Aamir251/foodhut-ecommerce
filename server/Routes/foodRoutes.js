import express from 'express';
const router = express.Router()


router.get("/", (req, res) => {
    
})

router.get("/:id", (req, res) => {
    res.send("Particular Food")
})

export default router