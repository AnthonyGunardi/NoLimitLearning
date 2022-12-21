const express = require('express');
const router= express.Router();
const userController =require('../controllers/user');

router.get('/users',userController.getUsers);
router.put('/points/:id/:score',userController.updatePoint);

module.exports = router;