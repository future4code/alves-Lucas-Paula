import React, { Component } from 'react'
import styled from 'styled-components'
import instagram from '../../img/instagram-5-128.png'
import facebook from '../../img/facebook-5-128.png'
import twitter from '../../img/twitter-5-128.png'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Imagem = styled.img`
    margin-right: 10px;
	width: 30%;
	height: 30%;
`

const Butao = styled.button`
	border: unset;
	margin: auto;
`

export class SecaoCompartilhamento extends Component {
	state = {
	}

	MenssagemConsole = (event) => {
		let menssagem = prompt('Digite um menssagem para compartilhar a publicacão')
		console.log(`Post compartilhado no ${event.target.alt} com a menssagem: ${menssagem}`)
	}

	render() {
		return <CommentContainer>
			<Butao onClick={this.props.confirma}><Imagem onClick={this.MenssagemConsole} src={facebook} alt={'Facebook'} /></Butao>
			<Butao onClick={this.props.confirma}><Imagem onClick={this.MenssagemConsole} src={twitter} alt={'Twitter'} /></Butao>
			<Butao onClick={this.props.confirma}><Imagem onClick={this.MenssagemConsole} src={instagram} alt={'Instagram'} /></Butao>
		</CommentContainer>
	}
}
