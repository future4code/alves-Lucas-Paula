import React, { useState, useEffect } from 'react'
import { Container, BotaoHeader, Titulo } from './HeaderCss'

function Header(props) {

    const [nomeButao, setNomeButao] = useState(true)

    useEffect(() => {
        setNomeButao(props.nameBotao)
    }, [props.nameBotao])

    return (
        <Container>
            <Titulo>AstroMatch</Titulo>
            <BotaoHeader onClick={props.trocaTela}>{nomeButao ? 'Ir para matches' : 'Ir para Perfis'}</BotaoHeader>
        </Container>
    )
}

export default Header