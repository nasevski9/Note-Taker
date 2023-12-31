    const express = require('express');
    const fs = require('fs');
    const { v4: uuidv4 } = require('uuid');
    const path = require('path');

    const app = express();
    const api = require('./routes/notes');
    
    const PORT = process.env.PORT || 3001;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use('/api/notes', api);

    app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

    app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

    app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
    );
