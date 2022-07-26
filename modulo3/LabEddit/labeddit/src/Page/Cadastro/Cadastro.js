import React from 'react'
import useForm from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/BASE_URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {listaPost} from '../../Router/Coordinator'

function Cadastro() {

  const navigate = useNavigate()
  const { form, pegaDados, limpaCampos } = useForm({
    username: '',
    email: '',
    senha: ''
  })

  const campoFormulario = (e) => {
    e.preventDefault()
    limpaCampos()
  }

  const registro = () => {
    const body = {
      "username": form.username,
      "email": form.email,
      "password": form.password
    }

    axios.post(`${BASE_URL}/users/signup`, body)
      .then((response) => {
        console.log(response)
        listaPost(navigate)
        localStorage.setItem('token', response.data)
      }).catch((erro) => {
        console.log(erro)
      })
  }

  return (
    <div>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <form onSubmit={campoFormulario}>
        <input name='username' onChange={pegaDados} placeholder='Nome de usuário' />
        <input name='email' onChange={pegaDados} placeholder='E-mail' />
        <input name='password' type='password' onChange={pegaDados} placeholder='Senha' />
        <button onClick={() => registro()}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro