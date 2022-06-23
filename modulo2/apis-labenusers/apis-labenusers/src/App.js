import './App.css';
import React, { Component } from 'react'
import Cadastro from './components/Cadastro'
import VisualizarUsuarios from './components/VisualizarUsuarios'
import axios from 'axios'


export default class App extends Component {
  state = {
    usuario: '',
    email: '',
    logado: false
  }
  deslogarSite = () => {
    this.setState({ logado: false })
  }

  campoUsuario = (event) => {
    this.setState({ usuario: event.target.value })
  }

  campoEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  cadastroUsuario = () => {
    let body = {
      "name": this.state.usuario,
      "email": this.state.email,
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body, {
      headers: {
        "Authorization": "lucas-rafael-alves"
      }
    }).then((resposta) => {
      if (resposta.status === 201) {
        alert("Usuario cadastrado com sucesso")
        this.setState({ logado: true })
      }

    }).catch((error) => {
      alert(error.response.data.message)
    })

  }

  render() {
    let testeLogico
    if (this.state.logado === true) {
      testeLogico = <div>
        <VisualizarUsuarios />
        <button onClick={this.deslogarSite}>Deslogar</button>
      </div>

    } else if (this.state.logado === false) {
      testeLogico = <div>
        <Cadastro
          campoUsuarios={this.campoUsuario}
          campoEmails={this.campoEmail}
          cadastroUsuarios={this.cadastroUsuario} />
      </div>
    }

    return (
      <div>
        {testeLogico}
      </div >
    )
  }
}