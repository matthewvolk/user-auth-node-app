// import external variables
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const passport    = require('passport-jwt');
const mongoose    = require('mongoose');

// initialize app variable
const app         = express();

// users route alias
const users       = require('./routes/users')

// initialize port variable
const port        = 3000;

// middleware
app.use(cors());

// body parser middleware
app.use(bodyParser.json());

// user routes
app.use('/users', users);


// index path
app.get('/', (req, res) => {
    res.send('Invalid End Point');
});




// start server
app.listen(port, () => {
    console.log('server started on port ' +port);
});