import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`

const Botao = styled.button`
    margin: 10px;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    background-color: #4B7ED1;
    border-color: #4B7ED1;
    color: white;
    :hover{
        top:-4px;
        box-shadow:0 4px 3px #999;
        background-color: white;
        color: #4B7ED1;
  }
`

const CampoTexto = styled.input`
    border-radius: 10px;
    text-align: center;
    height: 25px;
    font-size: 20px;
`

const LeituraTexto = styled.label`
    font-size: 20px;
`

export default class CriarPlaylist extends Component {
    state = {
        name: ''
    }

    createPlaylist = () => {

        let body = {
            name: this.state.name
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({name: ''})
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    campoDados = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <Container>
                <h2>Criar Playlists</h2>
                <p>Digite o nome da Playlists</p>
                <LeituraTexto>Nome: </LeituraTexto>
                <CampoTexto value={this.state.name} onChange={this.campoDados} placeholder='Nome'></CampoTexto>
                <Botao onClick={() => this.createPlaylist()}>Confirmar</Botao>
            </Container>
        )
    }
}
