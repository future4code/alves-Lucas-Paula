import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Components/BaseURL'
import { trocaTela, admin } from '../../Router/Coordinator'
import { Main, Botao, CampoTexto, Label } from './LoginCss'

function LoginPage() {

  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const navigate = useNavigate()

  const pegaUsuario = (e) => {

    setUsuario(e.target.value)

  }

  const pegaUSenha = (e) => {

    setSenha(e.target.value)

  }

  const logar = () => {

    const body = {
      'email': usuario,
      'password': senha
    }

    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        setUsuario('')
        setSenha('')
        admin(navigate)
      }).catch((error) => {
        console.log(error)
        setUsuario('')
        setSenha('')
      })
  }

  return (
    <Main>

      <h1>Login Admin</h1>

      <div>
        <label>Usuario:</label>
        <CampoTexto value={usuario} onChange={pegaUsuario} />
      </div>

      <div>
        <Label>Senha:</Label>
        <CampoTexto type="password" value={senha} onChange={pegaUSenha} />
      </div>

      <div>
        <Botao onClick={() => logar()}>Logar</Botao>
        <Botao onClick={() => trocaTela(navigate)}>Voltar</Botao>
      </div>

    </Main>
  )
}

export default LoginPage