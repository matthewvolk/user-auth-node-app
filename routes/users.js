const express = require('express');
const router = express.Router();

// registeration route
router.get('/register', (req, res, next) => {
    res.send('REGISTRATION')
});

// authentication route
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE')
});

// user profile route
router.get('/profile', (req, res, next) => {
    res.send('PROFILE')
});

// validate route
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE')
});

// export module
module.exports = router;