import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from '../Page/Cadastro/Cadastro'
import ListaPost from '../Page/ListaPost/ListaPost'
import Login from '../Page/Login/Login'
import Post from '../Page/Post/Post'
import Header from "../Components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
                <Header />
            <Routes>
                <Route index element={<Login />} />
                <Route path='cadastro' element={<Cadastro />} />
                <Route path="listapost" element={<ListaPost />} />
                <Route path="post/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router