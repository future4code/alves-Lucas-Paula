import styled from 'styled-components'
import TelaFundo from '../../Img/Tela_Fundo.jpg'


export const Fundo = styled.footer`
    display: flex;
    justify-content: center;
    background-image: url(${TelaFundo});
    bottom: 0;
    position: fixed;
`

export const Imagem = styled.img`

    width: 3%;
    @media (max-width: 768px) {
        width: 15%;
    }
`