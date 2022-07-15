import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    margin: 10px;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    width: 30%;
    background-color: #B6D4E3;
    border-radius: 10px;
    color: white;
    @media (max-width: 768px) {
        width: 90%;
    }

`

export const Titulo = styled.p`
    padding-left: 10px;

`

export const Deletar = styled.img`
    width: 10%;
    margin-right: 10px;
    @media (max-width: 768px) {
        width: 15%;
    }
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

export const Botao2 = styled.button`
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