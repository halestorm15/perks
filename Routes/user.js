const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:index', ctrl.user.getUserProfile);
router.put('/:index', ctrl.user.editProfile);
//router.post('/:index/:companyIndex', ctrl.user.addCompany);
router.delete('/:index', ctrl.user.deleteUser);

module.exports = router;