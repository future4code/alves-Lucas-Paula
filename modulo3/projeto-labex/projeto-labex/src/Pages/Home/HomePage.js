import React from 'react'
import { useNavigate } from 'react-router-dom'
import { principal } from '../../Router/Coordinator'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { Main, ConteudoPost, Post, IconePlaneta, Botao, Texto, Descricao, Titulo } from './HomeCss'
import TrocaImgPost from '../../Components/TrocaImgPost'


function HomePage() {

  const navigate = useNavigate()
  const { dados } = useMostrarViagem("trips");
  const dadosApi = dados?.trips


  let listPlaneta = []
  const exibeRespostaRequisicao = () => {

    if (dadosApi && dadosApi.length > 0) {

      if (dadosApi && dadosApi.length >= 3) {

        for (let i = 0; i < 3; i++) {
          listPlaneta.push(dadosApi[i])
        }

        return listPlaneta.map((item) => {
          return <Post key={item.id}>
            <IconePlaneta src={TrocaImgPost(item.planet)} alt='Planeta Jupter' />
            <Texto>📅 {item.date}</Texto>
            <p>{item.durationInDays} Dias</p>
            <h3>{item.name}</h3>
            <Descricao>{item.description}</Descricao>
            <p><strong>Planeta:</strong> {item.planet}</p>
          </Post>
        })

      } else {

        for (let i = 0; i < dadosApi.length; i++) {
          listPlaneta.push(dadosApi[i])
        }

        return listPlaneta.map((item) => {
          return <Post key={item.id}>
            <IconePlaneta src={TrocaImgPost(item.planet)} alt='Planeta Jupter' />
            <Texto>📅 {item.date}</Texto>
            <p>{item.durationInDays} Dias</p>
            <h3>{item.name}</h3>
            <Descricao>{item.description}</Descricao>
            <p><strong>Planeta:</strong> {item.planet}</p>
          </Post>
        })
      }

    } else if (dadosApi?.length === 0) {
      return <p>Ainda não foi cadastrado nenhuma viagem. </p>;
    }
  };

  return (
    <Main>
      <Titulo>Viagens Recentes</Titulo>
      <ConteudoPost>
        {exibeRespostaRequisicao()}
      </ConteudoPost>
      <Botao onClick={() => principal(navigate)}>Ver Mais...</Botao>
    </Main>
  )
}

export default HomePage