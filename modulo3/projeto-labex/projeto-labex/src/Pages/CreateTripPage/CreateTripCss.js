import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;

`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CampoDados = styled.input`
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid;
    width: 500px;
    height: 20px;
    font-size: 17px;
    @media (max-width: 768px) {
        width: 80%;
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
`

export const Titulo = styled.h1`
    color: #767676;
`