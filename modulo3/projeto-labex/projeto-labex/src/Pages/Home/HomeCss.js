import styled from 'styled-components'

export const Main = styled.main`
    text-align: center;
`

export const ConteudoPost = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
`

export const Post = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    width: 20%;
    margin: 10px;
    background-color: #B6D4E3;
    border-color: white;
    @media (max-width: 800px) {
        width: 100%;
    }
`
export const IconePlaneta = styled.img`
    width: 200px;
    @media (max-width: 800px) {
        width: none;
    }
`

export const Botao = styled.button`
    border-radius: 50px;
    width: 150px;
    padding: 10px;
    margin: 10px 10px 80px 10px;
    background-color: #001871;
    color: white;
    border-color: #001871;
    :hover{
        background-color: #B6D4E3;
        border-color: #B6D4E3;
    }
`

export const Texto = styled.p`
    font-size: 12px;
    color: #868383;
`

export const Descricao = styled.p`
    color: #5F5E5E;
`
export const Titulo = styled.h1`
    color: #767676;
`
