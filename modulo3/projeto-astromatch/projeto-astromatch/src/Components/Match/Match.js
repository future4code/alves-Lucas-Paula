import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Imagem } from './MatchCss'

function Match() {

  const [perfil, setPerfil] = useState([])
  const [controlador, setControlador] = useState(true)

  useEffect(() => {
    getMatches('lucas')
  }, [controlador])

  const getMatches = function (aluno) {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then((resposta) => {
        setPerfil(resposta.data.matches)
        console.log(resposta.data.matches)
      }).catch((erro) => {
        console.log(erro.message);
      })

  }

  const clear = function (aluno) {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
      .then((respota) => {
        console.log(respota)
        setControlador(!controlador)
      })
      .catch((erro) => {
        console.log(erro.message)
      })
  }

  return (
    <Container>
      {perfil.map((match, index) => {
        return <div key={index}>
          <Imagem src={match.photo} alt={match.photo_alt} />
          <p>{match.name}</p>
        </div>
      })}
      <button onClick={() => clear('lucas',)}>Limpar Matchs</button>
    </Container>
  )
}

export default Match