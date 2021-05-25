import express from 'express';
const app = express()
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()

app.get("/menu", (req, res) => {    //Get All Foods
    
    res.send("All products here");
    
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server Started"))