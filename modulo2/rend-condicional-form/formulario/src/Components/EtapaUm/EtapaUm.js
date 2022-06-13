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

export default class EtapaUm extends Component {
    state = {
        nome: "",
        idade: "",
        email: ""
    }
    render() {
        return (
            <Container>

                <Formulario>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                    <li>Qual o seu nome?</li>
                    <CampoTexto placeholder='Nome'></CampoTexto>
                    <li>Qual a sua idade?</li>
                    <CampoTexto placeholder='Idade'></CampoTexto>
                    <li>Qual o seu Email?</li>
                    <CampoTexto placeholder='Email'></CampoTexto>
                    <li>Qual sua escolaridade?</li>
                    <Selecao>
                        <option value="bota">Ensino Médio Incompleto</option>
                        <option value="bota">Ensino Médio Completo</option>
                        <option value="bota">Ensino Superior Incompleto</option>
                        <option value="bota">Ensino Superior Completo</option>
                    </Selecao>
                </Formulario>

            </Container>
        )
    }
}
