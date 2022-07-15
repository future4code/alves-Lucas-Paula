import React, { useState } from 'react'
import axios from 'axios'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { useNavigate } from 'react-router-dom'
import { Container, Item, Deletar, Titulo, Botao, Botao2 } from './AdminCss'
import { deslogar, criarViagem } from '../../Router/Coordinator'
import { BASE_URL } from '../../Components/BaseURL'
import iconeLixeira from '../../Img/lixeira.png'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'


function AdminHomePage() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { dados } = useMostrarViagem('trips')
  const recebeDados = dados?.trips
  const [tela, setTela] = useState(true)
  const [id, setId] = useState()

  const exibeRespostaRequisicao = () => {

    if (recebeDados && recebeDados.length > 0) {

      return recebeDados.map((item) => {
        return <Item key={item.id} onClick={() => mudaTela(item.id)}>
          <Titulo>{item.name}</Titulo>
          <Deletar src={iconeLixeira} alt='Icone de lixeira' onClick={() => deletarItem(item.id)} />
        </Item>
      })

    } else if (recebeDados?.length === 0) {
      return <p>Ainda não foi cadastrado nenhuma viagem. </p>;
    }

  }

  const deletarItem = (item) => {

    axios.delete(`${BASE_URL}trips/${item}`, {
      headers: {
        auth: token
      }
    }).then((response) => {
      console.log(response.data)
      document.location.reload(true)
    }).catch((error) => {
      console.log(error)
    })

  }

  const mudaTela = (id) => {

    setId(id)
    setTela(!tela)
  }

  const trocarTela = () => {

    switch (tela) {
      case true:
        return <Container>
          <Botao onClick={() => criarViagem(navigate)}>Criar Viagem</Botao>
          {exibeRespostaRequisicao()}
          <Botao2 onClick={() => deslogar(navigate)}>Deslogar</Botao2>
        </Container>
      default:
        return <Container>
          <TripDetailsPage id={id} />
          <Botao2 onClick={() => mudaTela()}>Voltar</Botao2>
        </Container>
    }

  }

  return (
    <>
      {trocarTela()}
    </>
  )
}

export default AdminHomePage