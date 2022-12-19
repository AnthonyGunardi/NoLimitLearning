const express = require('express');
const router= express.Router();
const Auth = require('../Authentication/is-auth');
const userController =require('../controllers/user');

router.put('/points/:id/:score',userController.updatePoint);

module.exports = router;