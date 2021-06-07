const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment');

router.post('/',  auth, commentCtrl.createComment);
router.get('/:carId', auth,  commentCtrl.getCommentCar);


module.exports = router;