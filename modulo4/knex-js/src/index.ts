import express, { query, raw } from "express";
import cors from "cors";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/actor', async (req, res) => {
    try {
        const resultado = await connection.raw(
            `SELECT * FROM introducao_Actor`
        )

        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.get('/actor/:name', async (req, res) => {
    try {
        const resultado = await connection.raw(
            `SELECT * FROM introducao_Actor WHERE name = "${req.params.name}"`
        )

        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.get('/actor/gender/:gender', async (req, res) => {
    try {
        const resultado = await connection.raw(
            `SELECT COUNT(*) FROM introducao_Actor WHERE gender = "${req.params.gender}"`
        )

        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.put('/actor/update/:id', async (req, res) => {
    try {
        await connection.raw(
            `UPDATE introducao_Actor SET salary = ${req.body.salary} WHERE id = "${req.params.id}";`
        )

        res.status(200).send("Ok!")
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.delete('/actor/delete/:id', async (req, res) => {
    try {
        await connection.raw(
            `DELETE FROM introducao_Actor WHERE id = "${req.params.id}";`
        )

        res.status(200).send("Ok!")
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.get('/actor/averageSalary/:gender', async (req, res) => {
    try {
        const resultado = await connection.raw(
            `SELECT AVG(salary), gender FROM introducao_Actor WHERE gender = "${req.params.gender}"`
        )

        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})

app.post("/actor/createActor", async (req, res) => {
    try {
        await connection.raw(
            `INSERT INTO introducao_Actor (id, name, salary, birth_date, gender)
            VALUES(
            "${req.body.id}",
            "${req.body.name}",
            ${req.body.salary},
            "${req.body.birthDate}",
            "${req.body.gender}");
        `)

        res.status(200).send("OK!");
    } catch (error: any) {
        res.status(res.statusCode || error.sqlMessage).send({ message: error.message })
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});