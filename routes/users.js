const express = require('express');
const router = express.Router();

// registeration route
router.post('/register', (req, res, next) => {
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

// export module
module.exports = router;