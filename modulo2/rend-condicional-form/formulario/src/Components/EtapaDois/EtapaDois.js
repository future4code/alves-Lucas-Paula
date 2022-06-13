import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`

const Formulario = styled.form`
    display: block;
    list-style-type: none;
`
const CampoTexto = styled.input`
    margin: 10px 0px;
`

export default class EtapaDois extends Component {
    render() {
        return (
            <Container>
                <Formulario>
                    <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                    <li>Qual o seu curso?</li>
                    <CampoTexto placeholder='Curso'></CampoTexto>
                    <li>Qual a unidade de ensino?</li>
                    <CampoTexto placeholder='Ensino'></CampoTexto>
                </Formulario>
            </Container>
        )
    }
}
