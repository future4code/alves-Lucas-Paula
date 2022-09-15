import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(req: Request, res: Response): Promise<void> {
   try {
      const title = req.query.title || ''
      let sort = req.query.sort
      let orde = req.query.orde as string
      let page = Number(req.query.page)

      if (!(sort === 'title' || sort === 'created_at')) {
         sort = 'title'
      }

      if (!orde || (orde.toUpperCase() !== 'ASC' && orde.toUpperCase() !== 'DESC')) {
         orde = 'ASC'
      }

      if (page < 1 || isNaN(page)) {
         page = 1
      }

      const size = 10
      const offset = size * (page - 1)

      const result = await connection("aula49_recipes")
         .where('title', "LIKE", `%${title}%`)
         .orderBy(sort, orde)
         .limit(size)
         .offset(offset)

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}