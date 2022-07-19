import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cabecalho, Navegacao, LogoFoguete } from './HeaderCss'
import { telaLogin, admin, trocaTela } from '../../Router/Coordinator'
import Logo from '../../Img/Foguete.png'
function Header() {

    const navigate = useNavigate()
    const confirmaLogado = () => {

        const token = localStorage.getItem('token')

        if (token === null) {
            telaLogin(navigate)
        } else {
            admin(navigate)
        }
    }

    return (
        <Cabecalho>

            <LogoFoguete src={Logo} onClick={() => trocaTela(navigate)} alt='Logo' />
            <Navegacao onClick={() => confirmaLogado()}>Área Admin</Navegacao>

        </Cabecalho>
    )
}

export default Header