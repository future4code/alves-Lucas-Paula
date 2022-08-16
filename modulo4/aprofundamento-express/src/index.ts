import express from "express";
import cors from "cors";
import { fazeres } from './fazeres'

const app = express();

app.use(express.json());
app.use(cors());

type aFazeres = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

let arrayAfazeres: aFazeres[] = fazeres

app.get("/allTarefas/:userID", (req, res) => {
    const userId = +req.params.userID
    const novoArray = arrayAfazeres.filter((item) => {
        return item.userId === userId
    })
    res.send(novoArray)
})



app.post("/fazeres/addAfazeres", (req, res) => {

    const { userId, title, completed } = req.body

    const afazer = arrayAfazeres.find((user) => user.userId === userId)

    if (afazer) {
        arrayAfazeres.push({
            "userId": userId,
            "id": +Date.now(),
            "title": title,
            "completed": completed
        })

        res.send('Tarefa cadastrada com sucesso!')
    } else {
        res.status(400).send("Usuario não encontrado")
    }
})

app.post("/fazeres/editCompleted", (req, res) => {
    const { userId, id, completed } = req.body
    // const userId = req.headers.authorization
    const afazer = arrayAfazeres.find((user) => user.userId === userId)

    if (afazer) {
        if (completed) {
            arrayAfazeres.map((item) => {
                if (item.id === id) {
                    item.completed = completed
                }
            })
            res.send("Alteracao feita com sucesso!")
        } else {
            arrayAfazeres.map((item) => {
                if (item.id === id) {
                    item.completed = completed
                }
            })
            res.send("Alteracao feita com sucesso!")
        }
    } else {
        res.status(404).send("Usuario não foi encontrado")
    }
})

app.delete('/fazeres/deleteAfazer', (req, res) => {
    const { userId, id } = req.body
    const afazer = arrayAfazeres.find((user) => user.userId === userId)

    if (afazer) {
        arrayAfazeres = arrayAfazeres.filter((item) => {
            return item.id !== id
        })

        res.send('Tarefa deletada com sucesso!')
    } else {
        res.status(404).send("Usuario não foi encontrado")
    }

})

app.get("/fazeres/:completed", (req, res) => {

    const complet = req.params.completed

    const novoArray = arrayAfazeres.filter((completed) => {
        if (complet === 'true') {
            return completed.completed === true
        } else {
            return completed.completed === false
        }
    })
    res.send(novoArray)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});