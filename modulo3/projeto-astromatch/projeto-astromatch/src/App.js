import React, { useState } from 'react'
import Header from './Components/Header'
import Perfil from './Components/Perfil'
import Match from './Components/Match'


function App() {

  const [trocaTela, setTrocaTela] = useState(true)

  const trocandoTela = function () {

    setTrocaTela(!trocaTela)

  }

  let telas

  switch (trocaTela) {
    case true:
      return telas = <div>
        <Header trocaTela={trocandoTela} nameBotao={trocaTela} />
        <Perfil />
      </div>

    case false:
      return telas = <div>
        <Header trocaTela={trocandoTela} />
        <Match />
      </div>

    default:
      break;
  }

  return (
    <div>
      {telas}
    </div>
  );
}

export default App;
