import express from "express";
import cors from "cors";
import { users } from "./users";

const app = express();

app.use(express.json());
app.use(cors());


const client = users

app.get('/labeBank', (req, res) => {
    res.send(client)
})

app.get('/labeBank/searchBalance', (req, res) => {
    try {
        const { name, cpf } = req.body
        
        if (!name || !cpf) {
            res.statusCode = 404
            throw new Error('Not Found')
        }
        
        if (typeof (name) !== 'string' || typeof (cpf) !== 'string') {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        const checkUser = client.find((user) => user.cpf === cpf && user.name === name)
        
        if (!checkUser) {
            res.statusCode = 404
            throw new Error('Not Found')
        } else {
            res.send(checkUser.extract.map((item) => item.value))
        }
        
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.post('/labeBank/addClient', (req, res) => {
    try {
        const { name, cpf, nasc } = req.body
        
        let age = new Date(nasc)
        let currentYear = new Date()
        
        const difference = Math.abs(currentYear.getTime() - age.getTime())
        let ageDifference = Math.ceil(difference / (1000 * 3600 * 24))
        
        if (!name || !cpf || !nasc) {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        if (typeof (name) !== 'string' || typeof (cpf) !== 'string' || typeof (nasc) !== 'string') {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        const checkUser = client.find((user) => user.cpf === cpf)
        
        if (!checkUser && ageDifference >= 18) {
            const newClient = {
                name,
                cpf,
                nasc,
                balance: 0,
                extract: [{
                    value: 0,
                    date: '',
                    description: ''
                }]
            }
            newClient.extract.splice(0,1)
            client.push(newClient)
            res.status(201).send('Account created successfully')
        } else {
            res.statusCode = 203
            throw new Error('Non-Authoritative')
        }
        
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.put('/labeBank/balanceUptdate', (req, res) => {
    try {
        const { name, cpf, balance } = req.body
        
        if (!name || !cpf || !balance) {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        if (typeof (name) !== 'string' || typeof (cpf) !== 'string' || typeof (balance) !== 'number') {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        const checkUser = client.find((user) => user.cpf === cpf && user.name === name)
        
        if (!checkUser) {
            res.statusCode = 404
            throw new Error('Not Found')
        } else {
            client.map((user) => {
                if (user.cpf === cpf) {
                    user.balance += balance
                }
            })
            
            res.status(200).send("Ok")
        }
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.put('/labeBank/payTheBill/:cpf', (req, res) => {
    try {
        const { value, date, description } = req.body
        const cpf = req.params.cpf
        let year: any = new Date()
        
        if (!value || !description || !cpf) {
            res.statusCode = 406
            throw new Error('Not Acceptabl')
        }
        
        if (typeof (value) !== 'number' || typeof (date) !== 'string' || typeof (description) !== 'string') {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        const user = client.find((client) => client.cpf === cpf)
        
        let dateLogic = date ? new Date(date.split('/').reverse().join('/')) : new Date()
        
        if (!user) {
            res.statusCode = 404
            throw new Error('Not Found')
        } else {
            client.map((user) => {
                if (user.cpf === cpf) {
                    const sumValues = user.extract.map(item => item.value).reduce((prev, curr) => prev + curr, 0) + value
                    if (user.balance >= value && user.balance >= sumValues && dateLogic >= year) {
                        const newExtract = {
                            value: value,
                            date: date ? date : year.toLocaleDateString().replace(new RegExp("/", "g"), "/"),
                            description: description
                        }
                        user.extract.push(newExtract)
                    } else {
                        res.statusCode = 401
                        throw new Error('Unauthorized')
                    }
                }
            })
            res.status(202).send('Accepted')
        }
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.put('/labeBank/transfer', (req, res) => {
    try {
        const { nameCount, cpfCount, nameReci, cpfReci, value } = req.body
        
        if (!nameCount || !cpfCount || !nameReci || !cpfReci || !value) {
            res.statusCode = 406
            throw new Error('Not Acceptabl')
        }
        
        if (typeof (value) !== 'number' || typeof (nameCount) !== 'string' || typeof (cpfCount) !== 'string' || typeof (nameReci) !== 'string' || typeof (cpfReci) !== 'string') {
            res.statusCode = 406
            throw new Error('Not Acceptable')
        }
        
        const checkCount = client.find((user) => user.cpf === cpfCount && user.name === nameCount)
        const checkReci = client.find((user) => user.cpf === cpfReci && user.name === nameReci)
        
        if (!checkCount || !checkReci) {
            res.statusCode = 404
            throw new Error('Not Found')
        } else {
            client.map((count) => {
                if (count.cpf === cpfCount) {
                    if (count.balance >= value) {
                        count.balance -= value
                    } else {
                        res.statusCode = 203
                        throw new Error('Non-Authoritative')
                    }
                }
            })
            
            client.map((count) => {
                if (count.cpf === cpfReci) {
                    count.balance += value
                }
            })
            
            res.status(202).send('Accepted')
        }
        
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});