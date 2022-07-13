import React from 'react'
import axios from 'axios'
import useMostrarViagem from '../../Hooks/useMostrarViagem'
import { useNavigate } from 'react-router-dom'
import { Container, Item, Deletar } from './AdminCss'
import { deslogar } from '../../Router/Coordinator'
import { BASE_URL } from '../../Components/BaseURL'
import iconeLixeira from '../../Img/lixeira.png'


function AdminHomePage() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { dados } = useMostrarViagem('trips')
  const recebeDados = dados?.trips

  const exibeRespostaRequisicao = () => {

    if (recebeDados && recebeDados.length > 0) {

      return recebeDados.map((item) => {
        return <Item key={item.id}>
          <p>{item.name}</p>
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

  return (
    <Container>
      {exibeRespostaRequisicao()}
      <button onClick={() => deslogar(navigate)}>Deslogar</button>
    </Container>
  )
}

export default AdminHomePage