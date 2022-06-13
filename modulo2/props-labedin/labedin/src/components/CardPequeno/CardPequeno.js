import React from 'react';
import styled from 'styled-components'


const Imagem = styled.img`
width:15px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;`;

const Titulo = styled.h4`
padding: 0.5vmax 0.5vmax;`;

function CardGrande(props) {
    return (
        <Container>
            <Imagem src={props.imagem} />
            <Titulo>{props.titulo}</Titulo>
            <p>{props.descricao}</p>
        </Container>
    )
}

export default CardGrande;