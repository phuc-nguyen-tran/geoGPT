import openaiClient from "./openai.js";

//function to generate response from prompt
const generate = async (chosenPlace) => {
    const response = await openaiClient.createCompletion({
        model: "gpt-3.5-turbo-16k",
        prompt: `Make a plan to travel the following destination in the number of days specified. If not, assume that the number of days is 7: \n\n${chosenPlace}`,
        temperature: 0.5,
        max_tokens: 15000,
    });
    return response.data.choices[0].text;
}

export default generate;