import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Components/Header/Header'
import Perfil from './Components/Perfil/Perfil'
import Match from './Components/Match/Match'

const Main = styled.div`
  padding: 20px 20px; 
`
const Body = styled.div`
  background-color: red;
`

function App() {

  const [trocaTela, setTrocaTela] = useState(true)

  const trocandoTela = function () {

    setTrocaTela(!trocaTela)

  }

  let telas

  switch (trocaTela) {
    case true:
      return telas = <Main>
        <Header trocaTela={trocandoTela} nameBotao={trocaTela} />
        <Perfil />
      </Main>

    case false:
      return telas = <Main>
        <Header trocaTela={trocandoTela} />
        <Match />
      </Main>

    default:
      break;
  }

  return (
    <Body>
      {telas}
    </Body>
  );
}

export default App;
