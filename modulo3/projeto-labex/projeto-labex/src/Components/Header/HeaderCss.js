import styled from 'styled-components'
import TelaFundo from '../../Img/Tela_Fundo.jpg'

export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    background-image: url(${TelaFundo});
    height: 750px;

`

export const Navegacao = styled.h3`
    color: white;
    height: 30px;
    :hover{
        border: 3px solid;
        border-color: #001871;
        border-top: none;
        border-left: none;
        border-right: none;
    }
`
