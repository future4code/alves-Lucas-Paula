import React from 'react'
import { useNavigate } from 'react-router-dom'
import { voltar, aplicacao } from '../../Router/Coordinator'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { Botao, Main, ConteudoPost, Post, IconePlaneta, Texto, Descricao } from '../Home/HomeCss'
import TrocaImgPost from '../../Components/TrocaImgPost'

function ListTripsPage() {

  const navigate = useNavigate()

  const { dados } = useMostrarViagem("trips");
  const dadosApi = dados?.trips

  const exibeRespostaRequisicao = () => {

    if (dadosApi && dadosApi.length > 0) {

      return dadosApi.map((item) => {
        return <Post key={item.id}>
          <IconePlaneta src={TrocaImgPost(item.planet)} alt='Planeta Jupter' />
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
      <Botao onClick={() => aplicacao(navigate)}>Inscrever-se</Botao>
    </Main>
  )
}

export default ListTripsPage