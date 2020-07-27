const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.put('/main/:index/:companyIndex/:pointsIndex', ctrl.points.editPoints)

module.exports = router;