import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import express  from "express";

const app= express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(bodyParser.json({ limit: '50mb' })); // Set maximum request size limit to 50MB
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());


//import routes

import userRouter from "./routes/user.routes.js"
import diseaseRouter from "./routes/disease.routes.js"

app.use( "/api/users",userRouter);
app.use( "/api",diseaseRouter);

export default app;