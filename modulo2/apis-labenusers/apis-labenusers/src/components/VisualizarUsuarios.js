import React, { Component } from 'react'
import axios from 'axios'


export default class VisualizarUsuarios extends Component {
    state = {
        usuarios: []
    }

    visualizaUsuario = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                "Authorization": "lucas-rafael-alves"
            }
        }).then((resposta) => {
            this.setState({ usuarios: resposta.data })
        }).catch((error) => {
            console.log(error.response.data.message)
        })

    }

    deletarUsuariosAPI = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                "Authorization": "lucas-rafael-alves"
            }
        }).then(() => {
            const listaUsuarios = this.state.usuarios.filter((item) => {
                return id !== item.id
            })

            this.setState({ usuarios: listaUsuarios })
        }).catch((error) => {

        })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <div key={usuario.id}>
                <p>{usuario.name}</p>
                <button onClick={() => { this.deletarUsuariosAPI(usuario.id) }}>Deletar Usuario</button>
            </div>
        })

        return (
            <div>
                <button onClick={() => { this.visualizaUsuario() }}>Visualizar usuarios</button>
                {listaUsuarios}
            </div>
        )
    }
}
