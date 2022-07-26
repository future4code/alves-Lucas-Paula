import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { post, deslogar } from '../../Router/Coordinator'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Constants/BASE_URL'

const Teste = styled.div`
  border: 1px solid;
`

function ListaPost() {

  const navigate = useNavigate()
  const { Post, getPosts, token, login, setId } = useContext(GlobalContext)
  const { form, pegaDados, limpaCampos } = useForm({
    "title": '',
    "body": ''
  })

  useEffect(() => {
    getPosts()
  }, [])

  const createPostVote = (id, testeLogico) => {

    let body
    if (testeLogico) {
      body = {
        "direction": 1
      }
    } else {
      body = {
        "direction": -1
      }
    }

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: login
      }
    }).then((response) => {
      console.log(response)
      getPosts()
    }).catch((erro) => {
      console.log(erro)
    })
  }

  const recebeId = (id) => {
    setId(id)
  }

  const render = Post ? (<div>
    {Post && Post.map((posts, index) => {
      return <Teste key={index}>
        <p>{posts.username}</p>
        <p>{posts.title}</p>
        <p>{posts.body}</p>
        <p>{posts.userVote}</p>
        <p>{posts.commentCount}</p>
        <button onClick={() => { recebeId(posts.id); post(navigate, posts.id) }}>Post</button>
        <button onClick={() => createPostVote(posts.id, true)}>Curtir</button>
        <button onClick={() => createPostVote(posts.id, false)}>Descurti</button>
      </Teste>
    })}
  </div>) : (<p>Carregando...</p>)

  const limpaDados = (e) => {
    e.preventDefault()
    limpaCampos()
  }

  const createPost = () => {
    const body = {
      "title": form.title,
      "body": form.body
    }

    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        console.log(response)
      }).catch((erro) => {
        console.log(erro)
      })
  }

  const pagina = <div>
    <form onSubmit={limpaDados}>
      <input name='title' onChange={pegaDados} placeholder='Titulo' />
      <textarea name='body' onChange={pegaDados} placeholder='Escreva seu post...'></textarea>
      <button onClick={() => createPost()}>Postar</button>
    </form>
    {render}
  </div>

  const renderPagina = token ? (<>{pagina}</>) : (<h1>Erro: Pagina não encontrada</h1>)

  return (
    <div>
      {renderPagina}
    </div>
  )
}

export default ListaPost