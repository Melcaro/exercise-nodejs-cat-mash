const router = require('express').Router();

const CatCtrl = require('./../controllers/catsController');

router.get('/', CatCtrl.getTwoCatsPicture);

router.put('/:catId', CatCtrl.addPointsToSelectedCat);

module.exports = router;
