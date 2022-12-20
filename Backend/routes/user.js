const express = require('express');
const router= express.Router();
const userController =require('../controllers/user');

router.put('/points/:id/:score',userController.updatePoint);

module.exports = router;