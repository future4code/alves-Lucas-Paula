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
const Selecao = styled.select`
    margin: 10px 0px;
`

export default class EtapaTres extends Component {
    render() {
        return (
            <Container>
                <Formulario>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                    <li>Por que você não terminou um curso de graduação?</li>
                    <CampoTexto placeholder='Descrição'></CampoTexto>
                    <li>Você fez algum curso complementar?</li>
                    <Selecao>
                        <option value="bota">Nenhum</option>
                        <option value="bota">Curso Técnico</option>
                        <option value="bota">Curso de Inglês</option>
                    </Selecao>
                </Formulario>
            </Container>
        )
    }
}
