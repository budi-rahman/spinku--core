const router = require('express').Router()
const outletController = require('../controllers/outletCtrl')
const {isAdmin} = require('../middlewares/role')

router.get('/', isAdmin, outletController.getOutlet)
router.post('/', isAdmin, outletController.createOutlet)
router.get('/:id', isAdmin, outletController.editOutlet)
router.put('/:id', isAdmin, outletController.updateOutlet)
router.delete('/:id', isAdmin, outletController.deleteOutlet)

module.exports = router