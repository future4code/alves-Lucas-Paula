import React, { useEffect, useState } from 'react'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { Main, ConteudoPost, Post, IconePlaneta, Botao, Texto, Descricao } from './HomeCss'
import Jupter from '../../Img/Jupter.png'
import Marte from '../../Img/Marte.png'
import Netuno from '../../Img/Netuno.png'

function HomePage() {

  const { dados } = useMostrarViagem("trips");
  const teste = dados?.trips
  console.log(teste)

  const exibeRespostaRequisicao = () => {


    if (teste && teste.length > 0) {
      return <ConteudoPost>

        <Post>
          <IconePlaneta src={Jupter} alt='Planeta Jupter' />
          <Texto>📅 {teste[0].date}</Texto>
          <p>{teste[0].durationInDays} Dias</p>
          <h3>{teste[0].name}</h3>
          <Descricao>{teste[0].description}</Descricao>
          <p><strong>Planeta:</strong> {teste[0].planet}</p>
        </Post>

        <Post>
          <IconePlaneta src={Marte} alt='Planeta Marte' />
          <Texto>📅 {teste[1].date}</Texto>
          <p>{teste[1].durationInDays} Dias</p>
          <h3>{teste[1].name}</h3>
          <Descricao>{teste[1].description}</Descricao>
          <p><strong>Planeta:</strong> {teste[1].planet}</p>      
        </Post>

        <Post>
          <IconePlaneta src={Netuno} alt='Planeta Netuno' />
          <Texto>📅 {teste[3].date}</Texto>
          <p>{teste[3].durationInDays} Dias</p>
          <h3>{teste[3].name}</h3>
          <Descricao>{teste[3].description}</Descricao>
          <p><strong>Planeta:</strong> {teste[3].planet}</p>
        </Post>
        
      </ConteudoPost>

    } else if (teste?.length === 0) {
      return <p>Ainda não foi cadastrado nenhuma viagem. </p>;
    }
  };


  return (
    <Main>
      <h1>Recente</h1>
      {exibeRespostaRequisicao()}
      <Botao>Ver Mais...</Botao>
    </Main>
  )
}

export default HomePage