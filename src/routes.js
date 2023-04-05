const routes = require('express').Router()

const { User } = require('./controllers/User')
const { getAllUsers, createUser, updateUser ,deleteUser } = new User()

routes.get('/users', getAllUsers)
routes.post('/users', createUser)
routes.put('/users', updateUser)
routes.delete('/users', deleteUser)

module.exports = routes
