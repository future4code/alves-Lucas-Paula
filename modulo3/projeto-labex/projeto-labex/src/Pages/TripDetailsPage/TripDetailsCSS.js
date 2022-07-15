import styled from "styled-components"

export const Post = styled.div`
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    border: 1px solid;
    margin: 10px;
    border-radius: 10px;
    background-color: #B6D4E3;
    color: white;
`
export const Titulo = styled.h2`
    text-align: center;

`

export const Texto = styled.p`
    padding: 10px;

`
export const CardPendente = styled.div`
    border: 1px solid;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    margin: 15px 80px;
    border-radius: 10px;
    text-align: center;
    background-color: #3a7d9e;
    @media (max-width: 768px) {
        width: 90%;
        margin: 10px 15px;
    }
`


export const CardAprovado = styled.div`
    text-align: center;
    border: 1px solid;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    margin: 15px 80px;
    border-radius: 10px;
    background-color: #3a7d9e;
`

export const Imagem = styled.img`
    width: 2%;
`

export const Botao = styled.button`
    border-radius: 50px;
    width: 150px;
    padding: 10px;
    margin: 10px;
    background-color: #001871;
    color: white;
    border-color: #001871;
    :hover{
        background-color: #B6D4E3;
        border-color: #B6D4E3;
    }
`