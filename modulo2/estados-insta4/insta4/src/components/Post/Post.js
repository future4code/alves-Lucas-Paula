import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSalvo } from '../IconeSalvo/IconeSalvo'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhamento } from '../SecaoCompartilhamento/SecaoCompartilhamento'
import iconeSalvoBranco from '../../img/icone-salvo.png'
import iconeSalvoPreto from '../../img/icone-salvo-preto.png'
import iconeCompartilhar from '../../img/compartilhar.png'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    numeroSalvo: 0,
    compartilhar: false,
    numeroCompartilhado: 0,
    fotoUsuario: "",
    nomeUsuario: "",
    fotoPost: ""

  }

  onClickCurtida = () => {

    if (this.state.curtido) {
      this.state.numeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      this.state.numeroCurtidas = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

  }

  onClickSalvo = () => {
    if (this.state.salvo) {
      this.state.numeroSalvo = this.state.numeroSalvo - 1
    } else {
      this.state.numeroSalvo = this.state.numeroSalvo + 1
    }

    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  confirmaCompartilhar = () => {

    this.setState({
      compartilhar: false,
      numeroCompartilhado: this.state.numeroCompartilhado + 1
    })
  }


  render() {
    let iconeCurtida
    let iconeSalvo

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }

    let componenteComentario
    let componenteCompartilhar

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhamento confirma={this.confirmaCompartilhar} />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>

        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSalvo
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
          valorContador={this.state.numeroSalvo}
        />

        <IconeSalvo
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={this.state.numeroCompartilhado}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post