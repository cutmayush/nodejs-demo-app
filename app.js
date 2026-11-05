const express = require('express');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Node.js CI/CD Demo Application!');
});

// Health Check Route
app.get('/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Application is running successfully'
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});