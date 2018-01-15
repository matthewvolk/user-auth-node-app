// import external variables
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const passport    = require('passport');
const mongoose    = require('mongoose');
const config      = require('./config/database');

// connect to database
mongoose.connect(config.database);

// 'on' connection
mongoose.connection.on('connected', () => {
    console.log('VOLK: Connected to Database: '+config.database);
});

// 'on' connection
mongoose.connection.on('error', (err) => {
    console.log('VOLK: Database Error: '+err);
});

// initialize app variable
const app         = express();

// users route alias
const users       = require('./routes/users')

// initialize port variable
const port        = 3000;

// cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// user routes
app.use('/users', users);

// index path
app.get('/', (req, res) => {
    res.send('Invalid End Point');
});




// start server
app.listen(port, () => {
    console.log('VOLK: Server started on port: ' +port);
});