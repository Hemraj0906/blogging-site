const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const  mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://HEMRAJ0906:HEMRAJ0906@cluster0.mvhfxwr.mongodb.net/hemrajdeshmukh", {
    useNewUrlParser: true
})
.then( () => console.log("Yep Now Can Go With MongoDb !"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 23415, function () {
    console.log('Your Web app running on port ' + (process.env.PORT || 23415))
});