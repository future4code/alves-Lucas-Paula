import express from 'express'
import cors from 'cors'
import { users } from './users'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

type typeUser = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let user = users

app.get('/users', (req, res) => {
    try {
        const type: string = req.query.name as string

        if (!type) {
            res.send(user)
        } else if (type) {

            const filterUser = user.filter((item) => {
                return item.name.includes(type)
            })

            if (!filterUser.length) {
                res.statusCode = 404
                throw new Error('User not found')
            } else {
                console.log('bb')
                res.send(filterUser)
            }
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post('/users', (req, res) => {

    try {
        const { id, name, email, type, age } = req.body

        if (!id || !name || !email || !type || !age) {
            res.statusCode = 412
            throw new Error('Precondition Failed')
        }

        if (typeof (id) !== 'number' || typeof (name) !== 'string' || typeof (email) !== 'string' || typeof (type) !== 'string' || typeof (age) !== 'number') {
            res.statusCode = 405
            throw new Error('Method Not Allowed')
        }

        const checksUser = user.find((user) => {
            return user.id === id
        })

        if (!checksUser) {
            const newUser: typeUser = {
                id,
                name,
                email,
                type,
                age
            }

            user.push(newUser)

            res.status(201).send('Created')

        } else {
            res.statusCode = 203
            throw new Error('Method Not Allowed, user already exists')
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})