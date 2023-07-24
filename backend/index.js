const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000; // Change this port as needed

// Parse incoming request bodies as JSON
app.use(express.json());

// Enable CORS for all routes (you can restrict it to specific routes if needed)
app.use(cors());

// Define a route for fetching news headlines
app.get('/api/news', async (req, res) => {
  try {
    const { country, category, pageSize, page } = req.query;
    const apiKey = '302d085f05c74a6d89899ebdbb070e43'; // Replace with your News API key

    // Construct the URL for the News API request
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

    // Make a GET request to the News API
    const response = await axios.get(apiUrl);

    // Send the response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching news.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on https://flashnews-seven.vercel.app/`);
});
