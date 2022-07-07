import React, { useState, useEffect } from 'react'
import { Container, Botao, Titulo } from './HeaderCss'

function Header(props) {

    const [nomeButao, setNomeButao] = useState(true)

    useEffect(() => {
        setNomeButao(props.nameBotao)
    }, [props.nameBotao])

    return (
        <Container>
            <Titulo>AstroMatch</Titulo>
            <Botao onClick={props.trocaTela}>{nomeButao ? 'Ir para matches' : 'Ir para Perfis'}</Botao>
        </Container>
    )
}

export default Header