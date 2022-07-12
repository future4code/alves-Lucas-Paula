import React from 'react'
import { useNavigate } from 'react-router-dom'
import { voltar } from '../../Router/Coordinator'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import {Botao, Main, ConteudoPost, Post, IconePlaneta, Texto, Descricao } from '../Home/HomeCss'
import Jupter from '../../Img/Jupter.png'
import Marte from '../../Img/Marte.png'
import Netuno from '../../Img/Netuno.png'
import Mercurio from '../../Img/Mercurio.png'
import Venus from '../../Img/Venus.png'
import Saturno from '../../Img/Saturno.png'
import Urano from '../../Img/Urano.png'

function ListTripsPage() {

  const navigate = useNavigate()

  const { dados } = useMostrarViagem("trips");
  const dadosApi = dados?.trips

  const imagens = (item) => {

    if (item === 'Marte') {
      return Marte
    } else if (item === 'Jupter') {
      return Jupter
    } else if (item === 'Netuno') {
      return Netuno
    } else if (item === 'Mercurio') {
      return Mercurio
    } else if (item === 'Venus') {
      return Venus
    } else if (item === 'Saturno') {
      return Saturno
    } else {
      return Urano
    }
  }

  const exibeRespostaRequisicao = () => {

    if (dadosApi && dadosApi.length > 0) {

      return dadosApi.map((item) => {
        return <Post key={item.id}>
          <IconePlaneta src={imagens(item.planet)} alt='Planeta Jupter' />
          <Texto>📅 {item.date}</Texto>
          <p>{item.durationInDays} Dias</p>
          <h3>{item.name}</h3>
          <Descricao>{item.description}</Descricao>
          <p><strong>Planeta:</strong> {item.planet}</p>
        </Post>
      })

    } else if (dadosApi?.length === 0) {
      return <p>Ainda não foi cadastrado nenhuma viagem. </p>;
    }
  };

  return (
    <Main>
      <ConteudoPost>
        {exibeRespostaRequisicao()}
      </ConteudoPost>
      <Botao onClick={() => voltar(navigate)}>Voltar</Botao>
    </Main>
  )
}

export default ListTripsPage