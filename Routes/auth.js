const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/', ctrl.auth.signup);
router.post('/login', ctrl.auth.login);

module.exports = router;