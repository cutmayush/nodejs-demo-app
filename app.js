const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Node.js CI/CD Demo Application!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Application is running successfully'
    });
});

// Start server only when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;