import React from 'react'
import { voltar } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Components/BaseURL'
import { Formulario, CampoDados, Botao, Container, Titulo } from './CreateTripCss'

function CreateTripPage() {
  const navigate = useNavigate()
  const { form, pegaDados, limpaCampos } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })


  const criarViagem = () => {

    const token = localStorage.getItem('token')

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays

    }

    axios.post(`${BASE_URL}trips`, body, {
      headers: {
        auth: token
      }
    })
      .then(() => {
        alert('Viagem criada com sucesso!')
      }).catch(() => {
        alert(`Não foi possivel criar esta viagem. \n Verifique se preencheu corretamente.`)
      })


  }

  const campoFormulario = (e) => {

    e.preventDefault()
    limpaCampos()
  }



  return (
    <Container>
      <Titulo>Cadastrar Viagem</Titulo>
      <Formulario onSubmit={campoFormulario}>
        <CampoDados type='text' name="name" value={form.name} onChange={pegaDados} placeholder="Nome" />
        <CampoDados type='text' name="planet" value={form.planet} onChange={pegaDados} placeholder="Planeta" />
        <CampoDados type='date' name="date" value={form.date} onChange={pegaDados} placeholder="Data" />
        <CampoDados type='text' name="description" value={form.description} onChange={pegaDados} placeholder="Descrição" />
        <CampoDados type='number' name="durationInDays" value={form.durationInDays} onChange={pegaDados} placeholder="Duração em dias" />
        <div>
          <Botao onClick={() => voltar(navigate)}>Voltar</Botao>
          <Botao onClick={() => criarViagem()}>Enviar</Botao>
        </div>
      </Formulario>

    </Container>
  )
}

export default CreateTripPage