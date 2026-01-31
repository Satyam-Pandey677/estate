import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import  morgan from "morgan";




dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.route("/").get((req, res) => {
    res.send("This home route")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})



