const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.put('/:pointsIndex', ctrl.points.editPoints);
router.post('/:index', ctrl.points.addProgram);
router.delete('/:index', ctrl.points.deleteProgram)

module.exports = router;