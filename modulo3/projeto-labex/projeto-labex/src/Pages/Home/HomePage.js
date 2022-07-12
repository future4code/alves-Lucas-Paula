import React from 'react'
import { useNavigate } from 'react-router-dom'
import { trocaTela } from '../../Router/Coordinator'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { Main, ConteudoPost, Post, IconePlaneta, Botao, Texto, Descricao } from './HomeCss'
import Jupter from '../../Img/Jupter.png'
import Marte from '../../Img/Marte.png'
import Netuno from '../../Img/Netuno.png'
import Mercurio from '../../Img/Mercurio.png'
import Venus from '../../Img/Venus.png'
import Saturno from '../../Img/Saturno.png'
import Urano from '../../Img/Urano.png'


function HomePage() {

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


  let listPlaneta = []
  const exibeRespostaRequisicao = () => {

    if (dadosApi && dadosApi.length > 0) {

      for (let i = 0; i < 3; i++) {
        listPlaneta.push(dadosApi[i])
      }

      return listPlaneta.map((item) => {

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
      <h1>Recente</h1>
      <ConteudoPost>
        {exibeRespostaRequisicao()}
      </ConteudoPost>
      <Botao onClick={() => trocaTela(navigate)}>Ver Mais...</Botao>
    </Main>
  )
}

export default HomePage