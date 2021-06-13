import express from 'express'
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import foodRoutes from "./routes/foodRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js";


const app = express()


app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
dotenv.config()
app.use(cors())


app.use("/menu", foodRoutes);
app.use("/users", userRoutes)
app.use("/orders", orderRoutes)

app.get("/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))
const PORT = process.env.PORT || 5000

const startServer = async () => {
    await connectDB()
    app.listen(PORT, () => console.log("Server Started"))
}

startServer()
