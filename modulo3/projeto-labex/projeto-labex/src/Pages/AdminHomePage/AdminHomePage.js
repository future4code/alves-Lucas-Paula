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
        return <Item key={item.id}>
          <Titulo onClick={() => mudaTela(item.id)}>{item.name}</Titulo>
          <Deletar src={iconeLixeira} alt='Icone de lixeira' onClick={() => deletarItem(item.id)} />
        </Item>
      })

    } else if (recebeDados?.length === 0) {
      return <p>Ainda não foi cadastrado nenhuma viagem. </p>;
    }

  }

  const deletarItem = (item) => {

    if (window.confirm('Tem certeza que deseja deletar esta viagem?')) {

      axios.delete(`${BASE_URL}trips/${item}`, {
        headers: {
          auth: token
        }
      }).then(() => {
        alert('Viagem deletada com suceso!')
        document.location.reload(true)
      }).catch((error) => {
        alert(`Não foi possivel deletar esta viagem. \n Erro encontrado: ${error.message}`)
      })
    } else {
      alert('Processo cancelado!')
    }


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
  const verificaLogin = token ? (<>{trocarTela()}</>) : (<>{deslogar(navigate)}</>)

  return (
    <>
      {verificaLogin}
    </>
  )
}

export default AdminHomePage