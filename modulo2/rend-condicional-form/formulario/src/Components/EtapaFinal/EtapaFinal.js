import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`


export default class EtapaFinal extends Component {


  render() {
    return (
      <Container>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        <p>Se desejar enviar novamente clique no botão abaixo</p>
      </Container>
    )
  }
}
