import React, { useState, useEffect } from 'react'

function Header(props) {

    const [nomeButao, setNomeButao] = useState(true) 

    useEffect(() => {
        setNomeButao(props.nameBotao)
    }, [props.nameBotao])

    return (
        <div>
            <h1>AstroMatch</h1>
            <button onClick={props.trocaTela}>{ nomeButao ? 'Ir para matches': 'Ir para Perfis'}</button>
        </div>
    )
}

export default Header