import React, { Component } from 'react'

export default class Cadastro extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="Usuario" onChange={this.props.campoUsuarios}></input>
                <input type="text" placeholder="Email" onChange={this.props.campoEmails}></input>
                <button onClick={this.props.cadastroUsuarios}>Cadastrar</button>
            </div>
        )
    }
}
