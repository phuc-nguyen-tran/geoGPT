import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv"

//openAI API key set up
const configuration = new Configuration({
    organization: process.env.OPENAI_API_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;