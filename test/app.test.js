const { test, before, after } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

let server;
let baseUrl;

before(async () => {
    server = app.listen(0);

    await new Promise(resolve => {
        server.once('listening', resolve);
    });

    const port = server.address().port;
    baseUrl = `http://localhost:${port}`;
});

after(async () => {
    await new Promise((resolve, reject) => {
        server.close(error => {
            if (error) reject(error);
            else resolve();
        });
    });
});

test('Home route should return welcome message', async () => {
    const response = await fetch(baseUrl);
    const body = await response.text();

    assert.strictEqual(response.status, 200);
    assert.match(body, /Welcome to Node.js CI\/CD Demo Application/);
});

test('Health route should return success status', async () => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.status, 'success');
});