const userSchema = require("../models/user");

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
    //console.log(req.body);
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

//Controlador para obtener listado de usuarios
const getUsers = async (req, res) => {
    const users =   await  userSchema
   .find()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }));
};

//Controlador para buscar un usuario por id
const getUserByID = async (req,res)=> {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

};

//Controlador para modificar un usuario por id
const updateUser = async (req,res)=> {
    const {id} = req.params;
    const {name, email, password} = req.body
    userSchema
    .updateOne({_id: id}, {$set: {name, email,password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })); 
};

//Controlador para eliminar un usuario por id
const deleteUser = async (req,res)=> {
    const {id} = req.params;
    userSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

};
module.exports = { createUser, getUsers , getUserByID, updateUser, deleteUser};