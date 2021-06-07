const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const carCtrl = require('../controllers/car');

router.get('/', carCtrl.getAllCar);
router.post('/',  multer, carCtrl.createCar);
router.get('/:id', carCtrl.getOneCar);
router.get('/:category', carCtrl.getCarbyCategory);
router.put('/:id', auth, carCtrl.modifyCar);
router.delete('/:id', auth, carCtrl.deleteCar);

module.exports = router;