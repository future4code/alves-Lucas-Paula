import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    border: 1px solid black;
    border-bottom: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
export const Botao = styled.button`
    position:relative;
    transition: all .2s ease-in-out;
    width: 150px;
    border-radius: 30px;
    padding: 5px;
    background-color: #7A76A4;
    border-color: #762D93;
    color: white;
    font-size: 15px;
    :hover{
    top:-4px;
    box-shadow:0 4px 3px #999;
    background-color: white;
    color: #7FBFB6;
}
`

export const Titulo = styled.h1`
    background-image: linear-gradient(to right, #7FBFB6, #762D93);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`