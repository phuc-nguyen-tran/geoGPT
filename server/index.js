import express from "express"
import cors from "cors"
import generate from "./generate.js";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", async(req,res) => {
    res.json("Hello World!")
})

app.post("/generate", async(req,res) => {
    const placeChosen = req.body.placeChosen;
    try{
        const travelPlan = await generate(placeChosen);
        res.json({response: travelPlan});
    } catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})



