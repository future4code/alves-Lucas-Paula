import React, { Component } from 'react'
import axios from 'axios'


export default class VisualizarUsuarios extends Component {
    state = {
        usuarios: [],
        informcaoUsuario: 1,
        usuariosEmail: [],
        id: '',
        name: '',
        email: '',
        busca: '',
        usuarioBusca: []
    }

    componentDidUpdate() {
        this.visualizaUsuario()
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
        let confirmação = window.confirm('Digite SIM ou NÃO para deletar o usuarios!').toLowerCase()
        if (confirmação === true) {
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
                alert(error.response.data.message)
            })

            alert('Usuario deletado com sucesso!')
        } else if (confirmação === false) {
            return alert(`Usuario não sera deletado!`)
        } else {
            return alert('Erro :( Confirme se digitou sim ou não!')
        }
    }

    usuarioDetalhado = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then((resposta) => {
            let recebeDados = resposta.data
            let novaLista = [...this.state.usuariosEmail, recebeDados]
            this.setState({ usuariosEmail: novaLista, informcaoUsuario: 2, id: id })
        }).catch((error) => {
            alert(error.resposta.data.message)
        })
    }

    voltarTelaUsuario = () => {
        this.setState({ informcaoUsuario: 1 })
    }

    editarUsuarioTela = () => {
        this.setState({ informcaoUsuario: 3 })
    }

    campoUsuario = (e) => {
        this.setState({ name: e.target.value })
    }

    campoEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    campoBusca = (e) => {
        this.setState({ busca: e.target.value })
    }

    editarUsuario = (id) => {
        let body = {
            'name': this.state.name,
            'email': this.state.email
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            body, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(() => {
            alert('Alterações salvas com sucesso!')
            this.setState({ informcaoUsuario: 1 })
        }).catch((error) => {
            alert(error.resposta.data.message)
        })
    }

    buscarUsuario = () => {
        let buscar = this.state.busca

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${buscar}&email=
        `, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then((resposta) => {
            this.setState({usuarioBusca: resposta.data, informcaoUsuario: 4})
        }).catch((error) => {
            console(error)
        })
    }

    render() {

        const telaDeBusca = this.state.usuarioBusca.map((usuario) =>{
            return <div key={usuario.id}>
                <p>Usuario: {usuario.name}</p>
                <button onClick={() => { this.usuarioDetalhado(usuario.id) }}>Mostrar informações</button>
            </div>
        })

        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <div key={usuario.id}>
                <p>Usuario: {usuario.name}</p>
                <button onClick={() => { this.usuarioDetalhado(usuario.id) }}>Mostrar informações</button>
                <button onClick={() => { this.deletarUsuariosAPI(usuario.id) }}>Deletar Usuario</button>
            </div>
        })

        let testeLogico
        if (this.state.informcaoUsuario === 1) {
            testeLogico = <div>
                <label>Buscar: </label>
                <input type="text" placeholder="Buscar" onChange={this.campoBusca}></input>
                <button onClick={() => { this.buscarUsuario()}}>Buscar</button><br />
                <button onClick={() => { this.visualizaUsuario() }}>Visualizar usuarios</button>
                {listaUsuarios}
            </div>
        } else if (this.state.informcaoUsuario === 2) {
            testeLogico = this.state.usuariosEmail.map((usuario) => {
                if (this.state.id === usuario.id) {
                    return <div>
                        <p>Usuario: {usuario.name}</p>
                        <p>Email: {usuario.email}</p>
                        <button onClick={() => { this.voltarTelaUsuario() }}>Voltar</button>
                        <button onClick={() => { this.editarUsuarioTela() }}>Editar Usuario</button>
                    </div>
                }
            })
        } else if(this.state.informcaoUsuario === 3){
            testeLogico = <div>
                <h3>Editar Usuario</h3>
                <input type="text" placeholder="Usuario" onChange={this.campoUsuario}></input>
                <input type="text" placeholder="Email" onChange={this.campoEmail}></input>
                <button onClick={() => { this.editarUsuario(this.state.id) }}>Salvar</button>
            </div>
        } else if (this.state.informcaoUsuario === 4){
            testeLogico = <div>
                {telaDeBusca}
            </div>
        }

        return (
            <div>
                {testeLogico}
            </div>
        )
    }
}
