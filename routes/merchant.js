const router = require('express').Router()
const merchantController = require('../controllers/merchantCtrl')
const {isAdmin} = require('../middlewares/role')

router.get('/', isAdmin, merchantController.getMerchant)
router.post('/', isAdmin, merchantController.createMerchant)
router.get('/:id', isAdmin, merchantController.editMerchant)
router.put('/:id', isAdmin, merchantController.updateMerchant)
router.delete('/:id', isAdmin, merchantController.deleteMerchant)

module.exports = router