const db = require('../models')

const User = db.users

// create user
const addUser = async (req, res) => {

    let data = {
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        email: req.body.email,
        password: req.body.password,
        isActive: req.body.isActive
    }

    let user = await User.create(data)
    res.status(200).send({ user })

}

// get all users
const getAllUsers = async (req, res) => {
    let users = await User.findAll({})

    res.status(200).send(users)
}

// get one user
const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({
        where: {
            id: id
        }
    })

    if (!user) { res.status(404).send({ message: "Cannot find user" }) }

    res.status(200).send(user)
}

// update user
const updateUser = async (req, res) => {

    let id = req.params.id
    let user = await User.update(req.body, {
        where : {
            id: id
        }
    })

    res.status(200).send(user)
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser
}