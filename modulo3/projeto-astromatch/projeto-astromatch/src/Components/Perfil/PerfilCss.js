import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    border: 5px solid black;
    border-top: none;
    border-image: linear-gradient(to right, #7FBFB6, #762D93);
    border-image-slice: 1;
`

export const Botao = styled.button`
    margin: 10px;
    all: unset;
    cursor: pointer;
    outline: revert;
`

export const ImgBotao = styled.img`
    width: 10%;
`

export const Imagem = styled.img`
    width: 300px;
    border-radius: 50%;
`

export const DivBotoes = styled.div`
    display: flex;
    justify-content: center;
`

export const Titulo = styled.h2`
    margin: 0;
`