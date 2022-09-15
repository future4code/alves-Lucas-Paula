import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export async function getOrdeUsers(req: Request, res: Response): Promise<void> {
    try {
        let sort = req.query.sort
        let orde = req.query.orde as string

        if (!(sort === 'name' || sort === 'email')) {
            sort = 'name'
        }

        if (!orde || (orde.toUpperCase() !== 'ASC' && orde.toUpperCase() !== 'DESC')) {
            orde = 'ASC'
        }

        const result = await connection("aula49_users")
            .orderBy(sort, orde)
        const users = result.map(toUser)

        res.status(201).send(users)

    } catch (erro: any) {
        console.log(erro.message)
        res.status(500).send(erro.message)
    }
}



const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password
    }
}