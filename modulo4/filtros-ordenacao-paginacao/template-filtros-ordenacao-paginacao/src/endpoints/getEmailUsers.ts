import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export async function getEmailUsers(req: Request, res: Response): Promise<void> {
    try {
        let email = req.params.email || ''

        const result = await connection("aula49_users")
            .where('email', "LIKE", `%${email}%`)
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