import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    
`

const Botao = styled.button`
    margin: 10px;
    width: 150px;
    height: 50px;
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

const Link = styled.a`
    text-decoration: none;
`
const CampoTexto = styled.input`
    border-radius: 10px;
    text-align: center;
    height: 25px;
    font-size: 20px;
    margin-right: 10px;
`
const LeituraTexto = styled.label`
    font-size: 20px;
`


export default class VisualizarPlaylist extends Component {
    state = {
        playlist: [],
        musicas: [],
        telas: 1,
        nome: '',
        artista: '',
        url: '',
        idPlaylist: '',
        title: ''
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(response => {
            this.setState({ playlist: response.data.result.list })
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }

    deletePlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(response => {
            let novasMusicas = this.state.playlist.filter((musicas) => {
                return id !== musicas.id
            })

            this.setState({ playlist: novasMusicas, })
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }

    getPlaylistTracks = (id, title) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(response => {
            this.setState({ musicas: response.data.result.tracks, telas: 2, idPlaylist: id, title: title})
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }

    addTrackToPlaylist = (id) => {

        let body = {
            'name': this.state.nome,
            'artist': this.state.artista,
            'url': this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(() => {
            this.setState({ nome: '', artista: '', url: '' })
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }

    removeTrackFromPlaylist = (id) => {
        let idPlaylist = this.state.idPlaylist
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`, {
            headers: {
                'Authorization': 'lucas-rafael-alves'
            }
        }).then(() => {
            let novaLista = this.state.musicas.filter((musica) => {
                return id !== musica
            })

            this.setState({ musicas: novaLista })
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }

    telaAdicionarMusicas = () => {
        this.setState({ telas: 3 })
    }

    telaLista = () => {
        this.setState({ telas: 1 })
    }

    campoNome = (e) => {
        this.setState({ nome: e.target.value })
    }
    campoArtista = (e) => {
        this.setState({ artista: e.target.value })
    }
    campoURL = (e) => {
        this.setState({ url: e.target.value })
    }

    render() {

        const listaMusicas = this.state.playlist.map((playlist) => {
            return <div key={playlist.id}>
                <h3>{playlist.name}</h3>
                <Botao onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar</Botao>
                <Botao onClick={() => { this.getPlaylistTracks(playlist.id, playlist.name) }}>Informação</Botao>
            </div>
        })

        const musica = this.state.musicas.map((musicas) => {
            return <div key={musicas.id}>
                <h3>{this.state.title}</h3>
                <p><strong>Musica: </strong>{musicas.name}</p>
                <p><strong>Artista: </strong>{musicas.artist}</p>
                <Link href={musicas.url} target="_blank"><Botao>Play</Botao></Link>
                <Botao onClick={() => { this.removeTrackFromPlaylist(musicas.id) }}>Deletar</Botao>
            </div>
        })

        let titulo = this.state.title
        let testeLogico
        if (this.state.telas === 1) {
            testeLogico = <div>
                <Botao onClick={() => this.getAllPlaylists()}>Buscar</Botao>
                {listaMusicas}
            </div>
        } else if (this.state.telas === 2) {
            testeLogico = <div>
                {musica}
                <Botao onClick={() => this.telaLista()}>Voltar</Botao>
                <Botao onClick={() => this.telaAdicionarMusicas()}>Adicionar musica</Botao>
            </div>
        } else {
            testeLogico = <div>
                <h3>{titulo}</h3>
                <p>Digite os dados para adicionar a musica a playlist {titulo}</p>
                <LeituraTexto>Nome: </LeituraTexto>
                <CampoTexto value={this.state.nome} onChange={this.campoNome} placeholder='Nome' />
                <LeituraTexto>Artista: </LeituraTexto>
                <CampoTexto value={this.state.artista} onChange={this.campoArtista} placeholder='Artista' />
                <LeituraTexto>URL: </LeituraTexto>
                <CampoTexto value={this.state.url} onChange={this.campoURL} placeholder='URL' />
                <Botao onClick={() => { this.addTrackToPlaylist(this.state.idPlaylist) }}>Adicionar musica</Botao>
                <Botao onClick={() => this.telaLista()}>Voltar</Botao>
            </div>
        }

        return (
            <Container>
                {testeLogico}
            </Container>
        )
    }
}
