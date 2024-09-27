const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser); // Rute untuk update
router.delete('/:id', userController.deleteUser); // Rute untuk delete
router.get('/search', userController.getUserByEmailOrName); // Rute untuk get by email atau name

module.exports = router;