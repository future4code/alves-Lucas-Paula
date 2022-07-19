import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Components/BaseURL'
import { Post, Titulo, Texto, CardAprovado, CardPendente, Imagem, Botao } from './TripDetailsCSS'
import TrocaImgPost from '../../Components/TrocaImgPost'

function TripDetailsPage(props) {

  const token = localStorage.getItem('token')
  const [dados, setDados] = useState([])
  const [candidato, setCandidato] = useState([])
  const [aprovados, setAProvados] = useState([])
  const [atualizaTela, setAtualizaTela] = useState(!true)

  useEffect(() => {

    axios.get(`${BASE_URL}trip/${props.id}`, {
      headers: {
        auth: token
      }
    }).then((response) => {
      const requerimento = [response.data.trip]
      setDados(requerimento)
      setCandidato(response.data.trip.candidates)
      setAProvados(response.data.trip.approved)
    }).catch((error) => {
      console.log(error.message)
    })

  }, [props.id, token, atualizaTela])

  const decideCandidato = (candidatoID, valor) => {

    const body = {
      approve: valor
    }

    axios.put(`${BASE_URL}trips/${props.id}/candidates/${candidatoID}/decide`, body, {
      headers: {
        auth: token
      }
    }).then(() => {
      setAtualizaTela(!atualizaTela)
    }).catch(() => {
      setAtualizaTela(!atualizaTela)
    })

    if (valor) {
      alert('Canditado aceito com sucesso!')
    } else {
      alert('Candidato desqualificado!')
    }
  }


  return (
    <div>
      {dados.map((item) => {
        return <Post key={item.id}>
          <Titulo>{item.name}</Titulo>
          <Texto><strong>Descrição:</strong> {item.description}</Texto>
          <Texto><strong>Planeta:</strong> {item.planet} <Imagem src={TrocaImgPost(item.planet)} alt={`Icone Planeta ${item.planet}`} /></Texto>
          <Texto><strong>Duração:</strong> {item.durationInDays} Dias</Texto>
          <Texto><strong>Data:</strong> {item.date}</Texto>
        </Post>
      })}

      <Post>
        <Titulo>Candidatos Pendentes</Titulo>
        {candidato.map((candidate) => {
          return <CardPendente key={candidate.id}>
            <Titulo>{candidate.name}</Titulo>
            <Texto><strong>Profissão:</strong> {candidate.profession}</Texto>
            <Texto><strong>Idade:</strong> {candidate.age}</Texto>
            <Texto><strong>País:</strong> {candidate.country}</Texto>
            <Texto><strong>Texto de Canditura:</strong> {candidate.applicationText}</Texto>
            <Botao onClick={() => decideCandidato(candidate.id, true)}>Aprovar</Botao>
            <Botao onClick={() => decideCandidato(candidate.id, false)}>Reprovar</Botao>
          </CardPendente>
        })}
      </Post>

      <Post>
        <Titulo>Candidatos Aprovados</Titulo>
        {aprovados.map((aprovado) => {
          return <CardAprovado key={aprovado.id}>
            <Texto>{aprovado.name}</Texto>
          </CardAprovado>
        })}
      </Post>

    </div>
  )
}

export default TripDetailsPage