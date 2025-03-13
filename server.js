require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const { queryGeminiModel } = require('./AiFunctions/aiFunctions');
const { queryGeminiModelCyberSecurityNews } = require('./AiFunctions/aiFunctions');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;

    if (!userInput) {
        return res.status(400).send({ error: 'Input is required' });
    }

    try {
        const response = await queryGeminiModel(userInput);
        res.send({ response: response.trim() });
    } catch (error) {
        res.status(500).send({ error: 'Failed to query Gemini model' });
    }
});

app.get('/news', async (req, res) => {
    try {
        const response = await queryGeminiModelCyberSecurityNews();
        res.send({ response: response.trim() });
    } catch (error) {
        res.status(500).send({ error: 'Failed to query Gemini model' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
