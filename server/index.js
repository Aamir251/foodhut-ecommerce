import express from 'express';
const app = express()
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import foodRoutes from "./Routes/foodRoutes.js"

dotenv.config()
app.use(cors())


app.use("/menu", foodRoutes);

const PORT = process.env.PORT || 5000

const startServer = async () => {
    await connectDB()
    await app.listen(PORT, () => console.log("Server Started"))
}

startServer()
