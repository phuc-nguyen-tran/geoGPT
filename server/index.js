import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const API_KEY = "";

app.get("/", async (req, res) => {
  res.json("Hello World!");
});

app.post("/generate", async (req, res) => {
  const placeChosen = req.body.placeChosen;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Generate a travel plan in ${placeChosen} in 7 days`,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
