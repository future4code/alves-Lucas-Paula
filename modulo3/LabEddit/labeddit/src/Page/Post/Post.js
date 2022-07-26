import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/BASE_URL'
import { GlobalContext } from '../../Global/GlobalContext'
import axios from 'axios'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { listaPost, deslogar } from '../../Router/Coordinator'



function Post() {

  const navigate = useNavigate()
  const params = useParams()
  const { token } = useContext(GlobalContext)
  const [comentario, setComentario] = useState()
  const { form, pegaDados, limpaCampos } = useForm({
    body: ''
  })

  useEffect(() => {
    getPostComments()
  }, [])

  const getPostComments = () => {
    axios.get(`${BASE_URL}/posts/${params.id}/comments`, {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      console.log(response.data)
      setComentario(response.data)
    }).catch((erro) => {
      console.log(erro)
    })
  }

  const createCommentVote = (id, testeLogico) => {

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


    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      console.log(response)
      getPostComments()
    }).catch((erro) => {
      console.log(erro)
    })
  }

  const render = (comentario && comentario.length > 0) ? (<>{comentario.map((coment, index) => {
    return <div key={index}>
      <p>{coment.username}</p>
      <p>{coment.body}</p>
      <p>{coment.userVote}</p>
      <button onClick={() => createCommentVote(coment.id, true)}>Curtir</button>
      <button onClick={() => createCommentVote(coment.id, false)}>Descurti</button>
    </div>
  })}</>) : (<p>Sem comentario!</p>)


  const limpaDados = (e) => {
    e.preventDefault()
    limpaCampos()
  }

  const createComment = () => {
    const body = {
      body: form.body
    }

    axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      console.log(response)
      getPostComments()
    }).catch((erro) => {
      console.log(erro)
    })
  }

  const pagina = <div>
    <form onSubmit={limpaDados}>
      <textarea name='body' onChange={pegaDados} placeholder='Adicionar comentário' />
      <button onClick={() => createComment()}>Responder</button>
    </form>
    {render}
    <button onClick={() => listaPost(navigate)}>Voltar</button>
  </div>

  const renderPagina = token ? (<>{pagina}</>) : (<h1>Erro: Pagina não encontrada</h1>)

  return (
    <div>
      {renderPagina}
    </div>

  )
}

export default Post