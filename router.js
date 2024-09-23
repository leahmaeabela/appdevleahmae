const express = require('express');
const router = express.Router();
const hp = require ('../controller/HpController');

router.get ('/', hp.nom);
router.get('/blank', hp.blank);
router.get('/checkout', hp.checkout);
router.get('/product', hp.product);
router.get('/store', hp.store);
router.get('/home', hp.nom);
module.exports = router;