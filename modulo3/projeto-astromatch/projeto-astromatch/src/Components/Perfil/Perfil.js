import React, { useState, useEffect } from 'react'
import { Container, Imagem, Botao, ImgBotao, DivBotoes } from './PerfilCss.js'
import axios from 'axios'
import Coracao from '../../Imagem/Coracao.png'
import IconeX from '../../Imagem/X.png'
import { BotaoHeader } from '../Header/HeaderCss'

function Perfil(props) {

    const [perfil, setPerfil] = useState({})
    const [perfilID, setPerfilID] = useState('')
    const [atualizaPerfil, setAtualizaPerfil] = useState(true)


    useEffect(() => {
        getProfileToChoose('lucas')
    }, [atualizaPerfil, props.controlador])


    const getProfileToChoose = function (aluno) {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((respota) => {
                setPerfil(respota.data.profile)
                setPerfilID(respota.data.profile.id)
            })
            .catch(erro => {
                alert(`Foi encontrado o seguinte erro: ${erro.message}`)
            })
    }

    const choosePerson = function (aluno, choice) {

        const body = {
            'id': perfilID,
            'choice': choice
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            .then((respota) => {
                if (choice) {

                    if (respota.data.isMatch) {
                        alert('Esta pessoa tambem deu match em você!')
                        setAtualizaPerfil(!atualizaPerfil)
                    } else {
                        alert('Esta pessoa não deu match em você!')
                        setAtualizaPerfil(!atualizaPerfil)
                    }

                } else {
                    alert('Você pulou essa pessoas')
                    setAtualizaPerfil(!atualizaPerfil)
                }
            }).catch((erro) => {
                alert(`Foi encontrado o seguinte erro: ${erro.message}`)
            })
    }

    const renderizarPerfil = perfil ? (<>
        <br />
        <Imagem src={perfil.photo} alt={perfil.photo_alt} />
        <p><strong>{perfil.name}</strong>, {perfil.age} anos</p>
        <p><strong>Bio:</strong> {perfil.bio}</p>
        <DivBotoes>
            <Botao onClick={() => choosePerson('lucas', true)}><ImgBotao src={Coracao} alt={'Icone Coração'} /></Botao>
            <Botao onClick={() => choosePerson('lucas', false)}><ImgBotao src={IconeX} alt={'Icone X'} /></Botao>
        </DivBotoes>
    </>) : (
        <>
            <br />
            <p>Você nao pode mais adicionar perfis, limpe-os para voltar a adicionar.</p>
            <BotaoHeader onClick={() => props.limparPerfil('lucas')}>Limpar Perfil</BotaoHeader>
        </>
    )

    return (
        <Container>
            {renderizarPerfil}
        </Container>
    )
}

export default Perfil