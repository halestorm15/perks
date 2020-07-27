const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:index', ctrl.user.getUserProfile);
router.put('/profile/:index', ctrl.user.editProfile);
router.post('/profile/:companyIndex', ctrl.user.addCompany);
router.delete('/profile/:index', ctrl.user.deleteUser);

module.exports = router;