import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";


export default function GlobalState(props) {

    const [Post, setPost] = useState()
    const token = localStorage.getItem('token')
    const [login, setLogin] = useState()
    const [id, setId] = useState()

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
          headers: {
            'Authorization': token
          }
        }).then((response) => {
          console.log(response.data)
          setPost(response.data)
        }).catch((erro) => {
          console.log(erro)
        })
      }

    const values = {
        Post,
        getPosts,
        token,
        setLogin,
        login,
        setId,
        id
    }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}