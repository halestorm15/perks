const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.company.showAllCompany);
router.post('/:companyIndex', ctrl.company.showCompany);

module.exports = router;