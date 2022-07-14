import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
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

export const CampoTexto = styled.input`
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const CampoButton = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Titulo = styled.h1`
    color: #767676
`