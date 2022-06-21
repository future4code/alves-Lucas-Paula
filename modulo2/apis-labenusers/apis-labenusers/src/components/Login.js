import React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="Usuario" onChange={this.props.campoUsuario}></input>
                <input type="text" placeholder="Email" onChange={this.props.campoEmail}></input>
                <button onClick={this.props.confirmarUsuario}>Logar</button>
            </div>
        )
    }
}
