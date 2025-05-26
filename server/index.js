const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

const movieList = [
    { title: 'The Matrix' },
    { title: 'Avengers: Endgame' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Godfather'},
];

app.get('/search', (req, res) => {
    const keyword = req.query.keyword.toLowerCase();
    console.log("🔍 Keyword received:", keyword);
    const filtered = movieList.filter(movie => 
        movie.title.toLowerCase().includes(keyword)
    );
    console.log("🎯 Filtered results:", filtered);
    res.json(filtered);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

