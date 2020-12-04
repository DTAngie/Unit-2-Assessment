var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/data');

/* GET home page. */
router.get('/', dataCtrl.index);
router.post('/', dataCtrl.create);
router.delete('/:id', dataCtrl.delete);

module.exports = router;
