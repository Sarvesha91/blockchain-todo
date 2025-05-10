const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { Blockchain, Block } = require('./blockchain');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const todoChain = new Blockchain();

// Add a new task
app.post('/addTask', (req, res) => {
    const { task, owner } = req.body;

    if (!task || !owner) {
        return res.status(400).json({ success: false, message: "Task and owner required." });
    }

    const newBlock = new Block(todoChain.chain.length, new Date().toISOString(), { task, owner });
    todoChain.addBlock(newBlock);
    res.json({ success: true, message: "Task added to blockchain!" });
});

// Get all tasks
app.get('/getTasks', (req, res) => {
    res.json(todoChain.chain);
});

// Verify blockchain integrity
app.get('/verify', (req, res) => {
    res.json({ isValid: todoChain.isChainValid() });
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
