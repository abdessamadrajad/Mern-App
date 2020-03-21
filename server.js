const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items =require('./routes/api/items');



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const db =require('./config/keys').mongoURI ;


mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(()=> console.log("MongoDB database connection established successfully"))
    .catch( err => console.log(err));

app.use('/api/items',items);



app.listen(port, () => console.log(`Server is running on port: ${port}`));

