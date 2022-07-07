import React, { useState, useEffect } from 'react'
import { Container, Imagem, Botao, ImgBotao, DivBotoes } from './PerfilCss.js'
import axios from 'axios'
import Coracao from '../../Imagem/Coracao.png'
import IconeX from '../../Imagem/X.png'

function Perfil() {

    const [perfil, setPerfil] = useState({})
    const [perfilID, setPerfilID] = useState('')


    useEffect(() => {
        getProfileToChoose('lucas')
    }, [])


    const getProfileToChoose = function (aluno) {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((respota) => {
                setPerfil(respota.data.profile)
                setPerfilID(respota.data.profile.id)
                console.log(respota.data.profile)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const choosePerson = function (aluno, choice) {

        const body = {
            'id': perfilID,
            'choice': choice
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            .then((respota) => {
                console.log(respota.data)
            }).catch((erro) => {
                console.log(erro.message)
            })
    }

    return (
        <Container>
            <br/>
            <Imagem src={perfil.photo} alt={perfil.photo_alt} />
            <p><strong>{perfil.name}</strong>, {perfil.age} anos</p>
            <p>{perfil.bio}</p>
            <DivBotoes>
                <Botao onClick={() => choosePerson('lucas', true)}><ImgBotao src={Coracao} alt={'Coração'} /></Botao>
                <Botao onClick={() => choosePerson('lucas', false)}><ImgBotao src={IconeX} alt={'Icone X'} /></Botao>
            </DivBotoes>
        </Container>
    )
}

export default Perfil