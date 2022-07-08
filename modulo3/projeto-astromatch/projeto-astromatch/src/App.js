import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Components/Header/Header'
import Perfil from './Components/Perfil/Perfil'
import Match from './Components/Match/Match'

const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: #A0A0A0;
`

const Main = styled.div`
  padding: 20px; 
  width: 30%;
  background-color: white;
  margin: 10px;
  
  @media(max-width: 800px){
    width: 100%;
    margin: 0;
  }

`
const MainMatch = styled.div`
  padding: 20px;
  width: 30%;
  background-color: white;
  margin: 10px;

  @media(max-width: 800px) {
    width: 100%;
    margin: 0;
  }

`

function App() {

  const [trocaTela, setTrocaTela] = useState(true)
  const [controlador, setControlador] = useState(true)

  const trocandoTela = function () {

    setTrocaTela(!trocaTela)

  }

  const clear = function (aluno) {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
      .then((respota) => {
        console.log(respota)
        setControlador(!controlador)
      })
      .catch((erro) => {
        alert(`Foi encontrado o seguinte erro: ${erro.message}`)
      })
  }

  let telas

  switch (trocaTela) {
    case true:
      return telas = <Body>
        <Main>
          <Header trocaTela={trocandoTela} nameBotao={trocaTela} />
          <Perfil limparPerfil={clear} controlador={controlador} />
        </Main>
      </Body>


    case false:
      return telas = <Body>
        <MainMatch>
          <Header trocaTela={trocandoTela} />
          <Match limparPerfil={clear} controlador={controlador} />
        </MainMatch>
      </Body>

    default:
      break;
  }

  return (
    <>
      {telas}
    </>
  );
}

export default App;
