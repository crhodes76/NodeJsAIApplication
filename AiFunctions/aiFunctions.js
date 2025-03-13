const axios = require('axios');
require('dotenv').config();
const apiKey = ""
// Function to query the Gemini 1.5 flash model
async function queryGeminiModel(input) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //const prompt = "Explain how AI works";

    const result = await model.generateContent(input);
    console.log(result.response.text());
    return result.response.text();
}

async function queryGeminiModelCyberSecurityNews() {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //const prompt = "Explain how AI works";
    const cyberSecurityNewsRequest = "Cybersecurity news, actual links I can click on";
    const result = await model.generateContent(cyberSecurityNewsRequest);
    console.log(result.response.text());
    return result.response.text();
}
module.exports = { queryGeminiModel , queryGeminiModelCyberSecurityNews };