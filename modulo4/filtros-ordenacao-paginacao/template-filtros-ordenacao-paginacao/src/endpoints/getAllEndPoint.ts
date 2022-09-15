import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export async function getAllEndPoint(req: Request, res: Response): Promise<void> {
    try {
        const name = req.query.name || ''
        let sort = req.query.sort
        let orde = req.query.orde as string
        let page = Number(req.query.page)

        if (!(sort === 'id' || sort === 'email')) {
            sort = 'id'
        }

        if (!orde || (orde.toUpperCase() !== 'ASC' && orde.toUpperCase() !== 'DESC')) {
            orde = 'ASC'
        }

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        const size = 10
        const offset = size * (page - 1)

        const result = await connection("aula49_users")
            .where('name', "LIKE", `%${name}%`)
            .orderBy(sort, orde)
            .limit(size)
            .offset(offset)

        const users = result.map(toUser)

        res.status(200).send(users)

    } catch (erro: any) {
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