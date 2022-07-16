import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Components/BaseURL'
import { trocaTela, admin } from '../../Router/Coordinator'
import { Main, Botao, CampoTexto, CampoButton, Titulo } from './LoginCss'
import useForm from '../../Hooks/useForm'

function LoginPage() {

  const navigate = useNavigate()
  const { form, pegaDados, limpaCampos } = useForm({
    email: '',
    password: ''
  })

  const campoFormulario = (e) => {
    e.preventDefault()
    limpaCampos()
  }

  const logar = () => {

    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        alert("Logado com sucesso!")
        localStorage.setItem('token', response.data.token)
        admin(navigate)
      }).catch((error) => {
        alert(' Dados errados! \n Confirme os dados digitados.')
      })
  }

  return (
    <Main>
      <Titulo>Login Admin</Titulo>
      <form onSubmit={campoFormulario}>
        <CampoTexto name='email' onChange={pegaDados} placeholder='Email' />
        <CampoTexto name='password' type="password" onChange={pegaDados} placeholder='Senha' />
        <CampoButton>
          <Botao onClick={() => logar()}>Logar</Botao>
          <Botao onClick={() => trocaTela(navigate)}>Voltar</Botao>
        </CampoButton>
      </form>
    </Main>
  )
}

export default LoginPage