const express = require('express'); // Loads the web tool
const path = require('path');
const app = express();
const PORT = 3000;

// This allows the server to read what you type in the login boxes
app.use(express.urlencoded({ extended: true }));

// When someone visits the main link, show them index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// When someone clicks the "Login" button
app.post('/login', (req, res) => {
    const name = req.body.username;
    res.send(`<h1>Hello, ${name}!</h1><p>You have successfully logged into the server.</p>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Your server is alive! Visit: http://localhost:${PORT}`);
});