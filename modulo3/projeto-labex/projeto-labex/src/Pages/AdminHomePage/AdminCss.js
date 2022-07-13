import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Item = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid;
    margin: 10px;
    box-shadow: 5px 5px 10px RGB(0, 0, 0, 0.212);
    width: 30%;

    @media (max-width: 768px) {
        width: 90%;
    }
`
export const Deletar = styled.img`
    width: 10%;
`