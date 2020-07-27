const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/main/:index/:companyIndex', ctrl.company.showCompany);
router.delete('/main/:index/:companyIndex', ctrl.company.deleteCompany);

module.exports = router;