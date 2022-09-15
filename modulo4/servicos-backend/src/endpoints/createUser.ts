import axios from "axios";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/nodeMailerTransport";
// import getAddressInfo from "../services/getAddressInfo";
import { user } from "../types";
import dotenv from 'dotenv'

dotenv.config()


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, cep, bairro, numero, compemento} = req.body

      if (!name || !nickname || !email || !cep) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'cep' são obrigatórios"
      }

      const id: string = Date.now().toString()
      //Aqui chamando o getAddress que retornara uma string com o endereço do usuario
      const address: string = await getAddressInfo(cep, bairro, numero, compemento)

      const newUser: user = { id, name, nickname, email, address }


      await connection('aula_webservices_users').insert(newUser)

      const emailInfo =  await transporter.sendMail({
         from: process.env.NODEMAILER_USER,
         to: email,
         subject: "Conta criada com sucesso",
         html: "<p>Sua conta foi criada</p>"
      })
      
      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}