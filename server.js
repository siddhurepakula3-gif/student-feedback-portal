const express = require('express');
const path = require('path');
const app = express();

// We are moving to Port 5000 to avoid all previous "Port 3000" conflicts
const PORT = 5000; 

app.use(express.urlencoded({ extended: true }));

// PRE-ASSIGNED DATA - Use these to log in
const VALID_HALLTICKET = "2026SCIENT01"; 
const VALID_PASSWORD = "student123";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === VALID_HALLTICKET && password === VALID_PASSWORD) {
        res.send(`<h1>Welcome!</h1><p>Login successful for Scient Institute student: ${username}</p>`);
    } else {
        res.send(`<h1 style="color:red;">Access Denied</h1><p>Invalid Hallticket or Password. <a href="/">Try again</a></p>`);
    }
});

app.listen(PORT, () => {
    console.log(`--- SERVER IS NOW ACTIVE ---`);
    console.log(`Step 1: Open your browser`);
    console.log(`Step 2: Type http://localhost:5000`);
});
