const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/daily', async (req, res) => {
    try {
        const { data } = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/today');
        res.json({ "useless_fact": data.text });
    } catch (error) {
        console.error('Error fetching daily fact:', error.message);
        res.status(500).json({ error: 'Failed to fetch daily fact' });
    }
});

app.get('/random', async (req, res) => {
    try {
        const { data } = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        res.json({ "useless_fact": data.text });
    } catch (error) {
        console.error('Error fetching random fact:', error.message);
        res.status(500).json({ error: 'Failed to fetch random fact' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
