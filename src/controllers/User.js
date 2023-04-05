const { prismaClient } = require('../database/prismaClient')

class User {
    async getAllUsers(request, response) {
        const allUsers = await prismaClient.user.findMany()

        return response.json(allUsers)
    }

    async createUser(request, response) {
        const { email, name } = request.body

        const user = await prismaClient.user.create({
            data: {
                email,
                name,
            },
        })

        return response.json(user)
    }

    async deleteUser(request, response) {
        const { email } = request.body

        const user = await prismaClient.user.findFirst({
            where: {
                email,

            },
        })

        console.log(user)


        if (user != null) {
            console.log('iihh');
            const deletedUser = await prismaClient.user.delete({
                where: {
                    email,
                },
            })

            return response.json(user)
        } else {
            console.log('ouu');
            return response.json('Not found')
        }
    }

    async updateUser(request, response) {
        const { email, name } = request.body

        const user = await prismaClient.user.findFirst({
            where: {
                email,
            },
        })


        if (user != null) {            
            const deletedUser = await prismaClient.user.update({
                where: {
                    email,
                },
                data: {
                    name
                }
            })

            return response.json(user)
        } else {
            return response.json('Not found')
        }
    }
}

module.exports = { User }
