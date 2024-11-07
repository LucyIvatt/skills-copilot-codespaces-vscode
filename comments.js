// Create web server
const express = require('express');
const app = express();

// Add comments to the server
const comments = [
    { username: "Alice", comment: "I love this" },
    { username: "Bob", comment: "This is the best" }
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});