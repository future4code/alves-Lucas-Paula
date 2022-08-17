import express from "express";
import cors from "cors";
import { arrayProdutos } from './data'
import { error } from "console";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

let produtos = arrayProdutos

app.get('/test', (req, res) => {
    res.send('Funcionando')
})

app.get('/loja/todosOsItens', (req, res) => {

    res.send(produtos)

})

app.post('/loja/criandoItem', (req, res) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            res.statusCode = 404
            throw new Error('Não pode passar valor vazio!')
        }

        if (price <= 0) {
            res.statusCode = 404
            throw new Error('Não pode passar preco 0!')
        }

        if (typeof (name) !== 'string') {
            res.statusCode = 404
            throw new Error('Name só aceita string!')
        }

        if (typeof (price) !== 'number') {
            res.statusCode = 404
            throw new Error('Price só aceita number!')
        }

        const novoItem = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        produtos.push(novoItem)

        res.send('Produto cadastrado com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post('/loja/editPrice/:idProduto', (req, res) => {
    try {
        const id = req.params.idProduto
        const price = req.body

        if (!price || id === ':idProduto') {
            res.statusCode = 404
            throw new Error('Não pode passar parametro vazio!')
        }

        if (typeof (price) !== 'number') {
            res.statusCode = 404
            throw new Error('Price só aceita number!')
        }

        if (price <= 0) {
            res.statusCode = 404
            throw new Error('Não pode passar preco 0!')
        }


        const editPrice = produtos.find((item) => {
            return item.id === id
        })

        if (editPrice) {
            produtos.map((item) => {
                if (item.id === id) {
                    item.price = price
                }
            })
            res.send('Alteracao feita com sucesso!')
        } else {
            res.statusCode = 404
            throw new Error('Produto não encontrado!')
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.delete('/loja/deltaItem/:idProduto', (req, res) => {
    try {
        const id = req.params.idProduto

        if (id === ':idProduto') {
            res.statusCode = 404
            throw new Error('Não pode passar parametro vazio!')
        }

        const editPrice = produtos.find((item) => {
            return item.id === id
        })

        if (editPrice) {
            produtos = produtos.filter((item) => {
                return item.id !== id
            })
            res.send('Produto deletado com sucesso!')
        } else {
            res.statusCode = 404
            throw new Error('Produto não encontrado!')
        }


    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})