import React, {useContext} from 'react'
import useForm from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/BASE_URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { listaPost } from '../../Router/Coordinator'
import { cadastro } from '../../Router/Coordinator'
import { GlobalContext } from '../../Global/GlobalContext'

function Login() {

  const {setLogin} = useContext(GlobalContext)
  const navigate = useNavigate()
  const { form, pegaDados, limpaCampos } = useForm({
    "email": '',
    "password": ''
  })

  const postLogin = () => {
    const body = {
      "email": form.email,
      "password": form.password
    }

    axios.post(`${BASE_URL}/users/login`, body)
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        setLogin(response.data.token)
        listaPost(navigate)

      }).catch((erro) => {
        console.log(erro)
      })
  }

  const campoFormulario = (e) => {
    e.preventDefault()
    limpaCampos()
  }

  return (
    <div>
      <h1>LabEddit</h1>
      <p>O projeto de rede social da Labenu</p>
      <form onSubmit={campoFormulario}>
        <input name='email' type='email' onChange={pegaDados} placeholder='E-mail' />
        <input name='password' type='password' onChange={pegaDados} placeholder='Senha' />
        <button onClick={() => postLogin()}>Login</button>
      </form>
        <button onClick={() => cadastro(navigate)}>Criar uma conta!</button>
    </div>
  )
}

export default Login