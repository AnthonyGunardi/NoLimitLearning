const express = require('express');
const router= express.Router();
const userController =require('../controllers/user');

router.get('/course/:courseName/:courseId',Auth.authentication,courseController.CoursePage);
router.post('/home/:courseId/:courseName',Auth.authentication,courseController.Bookmark);
router.get('/users/:userName/:userId',Auth.authentication,courseController.ShowBookmark);
router.post('/unbookmark',Auth.authentication,courseController.unbookmark);
router.put('/rating',Auth.authentication,courseController.rating);

module.exports = router;