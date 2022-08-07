import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, listaPost, deslogar } from '../../Router/Coordinator'
import { GlobalContext } from '../../Global/GlobalContext'

function Header() {
    const { id } = useContext(GlobalContext)
    const navigate = useNavigate();

    const botaoHeader = () => {
        if (window.location.pathname === `/cadastro`) {
            return (
                <button onClick={() => login(navigate)}>Entrar</button>
            );
        } else if (window.location.pathname === `/listapost`) {
            return (
                <button onClick={() => deslogar(navigate)}>Logout</button>
            );
        } else if (window.location.pathname === `/post/${id}`) {
            return (
                <div>
                    <button onClick={() => listaPost(navigate)}>Voltar</button>
                    <button onClick={() => deslogar(navigate)}>Logout</button>
                </div>
            );
        }
    };

    return (
        <div>
            {botaoHeader()}
        </div>
    );
}

export default Header