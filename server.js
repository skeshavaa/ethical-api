const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api')

const app = express();

// BodyParser middlewar
app.use(bodyParser.json());

mongoose
    .connect('mongodb+srv://keshavaa:mlhhackathon@cluster0.yybsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

    const port = process.env.PORT || 5000;


app.use('/api/items', items)

app.listen(port, () => console.log(`Server started on ${port}`));