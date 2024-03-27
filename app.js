const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // You can change the port if needed

app.use(bodyParser.json());
app.use(cors());

// Define routes for robot commands
app.post('/place', (req, res) => {
    try {
        console.log('PLACE command received:', req.body);
        res.status(200).send({res: 'OK'});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/move', (req, res) => {
    // Logic for MOVE command
    console.log('MOVE command received');
    res.sendStatus(200);
});

app.post('/left', (req, res) => {
    // Logic for LEFT command
    console.log('LEFT command received');
    res.sendStatus(200);
});

app.post('/right', (req, res) => {
    // Logic for RIGHT command
    console.log('RIGHT command received');
    res.sendStatus(200);
});

app.get('/report', (req, res) => {
    // Logic for REPORT command
    const report = { x: 0, y: 0, direction: 'NORTH' }; // Example report data
    console.log('REPORT command received:', report);
    res.json(report);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});