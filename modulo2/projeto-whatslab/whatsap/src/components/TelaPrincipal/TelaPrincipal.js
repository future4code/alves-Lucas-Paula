import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerMain = styled.div`
    background-color: white;     
    width: 100%;     
    max-width: 700px;     
    margin: 5px auto;     
    padding: 20px 20px; 
    border: 1px solid black; 
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212); 
    border-radius: 10px
`
const AreaDeEntradaDeDados = styled.div`
    display: flex; 
    margin-right: 5px;
    justify-content: center;
`
const CampoUsuario = styled.input`
    margin-right: 5px
`
const CampoMenssagem = styled.input`
    width: 60%; 
    margin-right: 5px;
`

const Botao = styled.button`

`

const CampoTexto = styled.div`
    overflow: auto;
    height: 800px;
    border: 1px solid black; 
    padding: 5px 20px;
    margin: 10px;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212); 
    border-radius: 10px
`

export default class TelaPrincipal extends Component {
    state = {
        menssagem: [{
            nomeUsuario: 'Grupo',
            menssagens: 'Bom dia pessoal, vamos esta todos juntos, nesse grupo lindo'
        }],

        inputUsuario: '',
        inputMenssagem: ''
    }

    adicionarMenssagem = () => {

        const novaMenssagem = {
            nomeUsuario: this.state.inputUsuario,
            menssagens: this.state.inputMenssagem
        };

        const novasMenssagens = [...this.state.menssagem, novaMenssagem];

        this.setState({ menssagem: novasMenssagens });
    }


    onChangeInputUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value });
    };

    onChangeInputMenssagem = (event) => {
        this.setState({ inputMenssagem: event.target.value });
    };

    render() {

        const menssagens = this.state.menssagem.map((menssagem) => {
            return (
                <p><strong>{menssagem.nomeUsuario}</strong>: {menssagem.menssagens}</p>
            )
        })

        return (
            <div>
                <ContainerMain>

                    <CampoTexto>
                        {menssagens}
                    </CampoTexto>

                    <AreaDeEntradaDeDados>
                        <CampoUsuario value={this.state.valorInputUsuario}
                            onChange={this.onChangeInputUsuario}
                            placeholder="Usuario">
                        </CampoUsuario>

                        <CampoMenssagem
                            value={this.state.valorInputMenssagem}
                            onChange={this.onChangeInputMenssagem}
                            placeholder="Menssagem">
                        </CampoMenssagem>

                        <Botao onClick={this.adicionarMenssagem}>Enviar</Botao>
                    </AreaDeEntradaDeDados>

                </ContainerMain>
            </div>
        )
    }
}

