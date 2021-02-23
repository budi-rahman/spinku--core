const router = require('express').Router()
const terminalController = require('../controllers/terminalCtrl')
const {isAdmin} = require('../middlewares/role')

router.get('/', isAdmin, terminalController.getTerminal)
router.post('/', isAdmin, terminalController.createTerminal)
router.get('/:id', isAdmin, terminalController.editTerminal)
router.put('/:id', isAdmin, terminalController.updateTerminal)
router.delete('/:id', isAdmin, terminalController.deleteTerminal)

module.exports = router