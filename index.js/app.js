const express = require('express')
const bodyParser = require('body-parser');
const route = require('../router');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ecoding45:easycoding@cluster0.akkebzk.mongodb.net/Book?retryWrites=true&w=majority&appName=Cluster0", {})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});




















