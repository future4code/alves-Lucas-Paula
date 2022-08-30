import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getEmailUsers } from "./endpoints/getEmailUsers";
import { getOrdeUsers } from "./endpoints/getOrdeUsers";
import { getPagUsers } from "./endpoints/getPagUsers"
import { getAllEndPoint } from "./endpoints/getAllEndPoint"


app.get("/recipes", getAllRecipes)
app.get("/user", getAllUsers)
app.get("/user/orde", getOrdeUsers)
app.get("/user/pag", getPagUsers)
app.get("/user/allEndPoint", getAllEndPoint)
app.get("/user/:email", getEmailUsers)