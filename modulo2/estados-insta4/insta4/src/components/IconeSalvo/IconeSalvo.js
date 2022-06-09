import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
    width: 70%;
    height: 70%;
    margin-top: 0.8vw;
    margin-right: 5px;
`

export function IconeSalvo(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
		<p>{props.valorContador}</p>
	</IconContainer>
}