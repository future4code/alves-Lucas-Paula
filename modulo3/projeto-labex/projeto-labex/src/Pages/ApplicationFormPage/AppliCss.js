import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    text-align: justify;
`


export const Botao = styled.button`
    border-radius: 50px;
    width: 150px;
    padding: 10px;
    margin: 10px;
    background-color: #001871;
    color: white;
    border-color: #001871;
`

export const CampoDados = styled.input`
    padding: 5px;
    border-radius: 10px;
    margin: 10px 0px;
    width: 320px;
    height: 25px;
    border: 1px solid;
    font-size: 17px;
`

export const CampoSelection = styled.select`
    margin: 10px 0px;
    padding: 5px;
    border-radius: 10px;
    height: 40px;
    width: 340px;
`

export const Titulo = styled.h1`
    color: #767676;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`
