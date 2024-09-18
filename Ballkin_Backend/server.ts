import express from "express";
import { statisticRoute } from "./Routes/statistic.routes";
import { connectToDB } from "./config/mongoose";

const app = express();
app.use(express.json());


const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("laterbitches");
})

app.use('/statistics', statisticRoute);

connectToDB();

app.listen(PORT, () => {{
    console.log("Server running on Port:", PORT);
}})