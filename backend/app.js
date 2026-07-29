const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;

    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    appid: process.env.OPENWEATHER_API_KEY,
                    units: "metric",
                },
            }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json({
            message: "Unable to fetch weather",
        });
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running...");
});