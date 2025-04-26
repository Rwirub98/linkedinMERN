import express from "express";
import dotenv, { config } from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config()

let app = express();
app.use(express.json())
app.use(cookieParser())
let port = process.env.PORT || 5000
app.use("/api/auth",authRouter)




app.listen(port, () => {
  connectDb()
  console.log("server started");
})


//http://localhost:8000/api/auth/signup