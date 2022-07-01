const userController = require('../controllers/userController.js');

const router = require('express').Router();

router.post('/add', userController.addUser)

router.get('/all', userController.getAllUsers)



router.get('/:id', userController.getOneUser)

router.put('/:id', userController.updateUser)



module.exports = router