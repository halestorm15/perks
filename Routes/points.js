const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.put('/:pointsIndex', ctrl.points.editPoints);
router.delete('/:index', ctrl.points.deleteProgram)

module.exports = router;