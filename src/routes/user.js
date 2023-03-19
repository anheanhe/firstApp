const express = require("express");
const { createUser, getUsers,getUserByID, updateUser, deleteUser} = require('../controllers/user');

const userSchema = require("../models/user");

const router = express.Router();

// endpoints de usuarios
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserByID);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;