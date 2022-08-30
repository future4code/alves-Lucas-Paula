import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export async function getPagUsers(req: Request, res: Response): Promise<void> {
    try {
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        
        const size = 10
        const offset = size * (page - 1)

        const result = await connection("aula49_users")
            .limit(size)
            .offset(offset)

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