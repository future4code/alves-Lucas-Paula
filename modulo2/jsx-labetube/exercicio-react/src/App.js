import React from 'react';
import inicio from './imagens/icone-casa.png';
import inscritos from './imagens/icone-inscrito.png';
import historico from './imagens/icone-historico.png';
import busca from './imagens/icone-bussula.png';
import biblioteca from './imagens/icone-biblioteca.png';
import lupa from './imagens/icone-lupa.png'
import logo from './imagens/logo-yootube.png'
import './App.css';

function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo sera iniciado")
  }

  return (
    <div className="body">
      <div className="tela-inteira">
        <header>
          <img id="logo" src={logo} /><h1>Lab Tube</h1>
          <div id="campoBusca">
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <button id="campoDeBuscaImg"><img className="icone" src={lupa} /></button>
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"><img className="icone" src={inicio} />Início</li>
              <li className="botoes-meunu-vertical"><img className="icone" src={busca} />Explorar</li>
              <li className="botoes-meunu-vertical"><img className="icone" src={inscritos} />Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical"><img className="icone" src={biblioteca} />Biblioteca</li>
              <li className="botoes-meunu-vertical"><img className="icone" src={historico} />Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
