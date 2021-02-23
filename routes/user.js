const router = require('express').Router()
const userController = require('../controllers/userCtrl')
const {isAdmin} = require('../middlewares/role')

router.get('/', isAdmin, userController.getUser)
router.post('/', isAdmin, userController.createUser)
router.get('/:id', isAdmin, userController.editUser)
router.put('/:id', isAdmin, userController.updateUser)
router.delete('/:id', isAdmin, userController.deleteUser)

module.exports = router; 