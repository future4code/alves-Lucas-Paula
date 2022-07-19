import styled from 'styled-components'
import TelaFundo from '../../Img/Tela_Fundo.jpg'

export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    background-image: url(${TelaFundo});
    height: 50px;
`

export const Navegacao = styled.p`
    color: white;
    height: 25px;
    text-decoration: none;

    :hover{
        border: 3px solid;
        border-color: #001871;
        border-top: none;
        border-left: none;
        border-right: none;
    }
`

export const LogoFoguete = styled.img`
    width: 3%;

    @media (max-width: 768px) {
        width: 20%;
    }
`
