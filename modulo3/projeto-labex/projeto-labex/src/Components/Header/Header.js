import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cabecalho, Navegacao } from './HeaderCss'
import { telaLogin } from '../../Router/Coordinator'

function Header() {

    const navigate = useNavigate()



    return (
        <Cabecalho>

            <img src='#' alt='Logo' />
            <Navegacao href="login" onClick={() => telaLogin(navigate)}>Área Admin</Navegacao>

        </Cabecalho>
    )
}

export default Header