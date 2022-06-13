import React, { Component } from 'react'
import EtapaUm from '../EtapaUm/EtapaUm'
import EtapaDois from '../EtapaDois/EtapaDois'
import EtapaTres from '../EtapaTres/EtapaTres'
import EtapaFinal from '../EtapaFinal/EtapaFinal'
import styled from 'styled-components'

const Botao = styled.button`
    display: block;
    margin: 0 auto;
`

export default class PaginaInteira extends Component {
    state = {
        etapa: 1
    }

    renderizaEtapa = () => {
        switch (this.state.etapa) {
            case 1:
                return <EtapaUm />;
            case 2:
                return <EtapaDois />;
            case 3: 
                return <EtapaTres />;
            case 4: 
                return <EtapaFinal />;
        }
    }

    irParaProximaEtapa = () =>{
        if(this.state.etapa < 4){
            this.setState({etapa: this.state.etapa + 1})
        } else {
            this.setState({etapa: 1})
        }
    }

    render() {
        return (
            <div>
                {this.renderizaEtapa()}
                <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>
            </div>
        )
    }
}
