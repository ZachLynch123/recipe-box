const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');

const app = express();

// initialize middleware
app.use(parser.json());

const db = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 5000;

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => {
    console.log('database connected');
})
.catch(e => {
    console.log(e);
});

app.listen(PORT, () => console.log(`Server online at: ${PORT}`)
);