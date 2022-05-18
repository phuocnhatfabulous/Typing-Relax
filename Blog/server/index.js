import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import posts from "./routes/posts.js";

const app = express();
const PORT = process.env.port || 3000;

const URI =
    "mongodb+srv://admin:R5ebwRK3wb4YQYUb@cluster0.vjtar.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT} `);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });
