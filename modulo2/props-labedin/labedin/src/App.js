import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import LucasPerfil from './imagens/Perfil.jpeg'
import Labenu from './imagens/logo-labenu.png'
import ESAB from './imagens/esab.jpg'
import CNI from './imagens/CNI.png'
import IconeCasa from './imagens/icone-casa.png'
import IconeSeta from './imagens/icone-seta.png'
import iconeLocal from './imagens/icone-localizacao.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={LucasPerfil}
          nome="Astrodev"
          descricao="Oi, eu sou o Lucas Rafael. Sou aluno da Labenu. Adora fazer os trabalhos e me desnvolver intelectualmente, quanto mais trabalho melhor, para testar meus conhecimentos em programação."
        />

        <ImagemButton
          imagem={IconeSeta}
          texto="Ver mais"
        />

        <div>
          <CardPequeno
            imagem={IconeCasa}
            titulo={"E-mail:"}
            descricao={"google_@media.com.br"}
          />
          <CardPequeno
            imagem={iconeLocal}
            titulo={"Endereço:"}
            descricao={"Rua Labenu"}
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={ESAB}
          nome="ESAB"
          descricao="Formando em Sistemas de informação."
        />

        <CardGrande
          imagem={Labenu}
          nome={'Labenu'}
          descricao="Estou atualmente estudando na Labenu, sou formado em informatica profissinaolisante."
        />

        <CardGrande
          imagem={CNI}
          nome={"CNI"}
          descricao={"Sou formado em informatica profissinaolisante."}
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"}
          texto={"Facebook"}
        />

        <ImagemButton
          imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"}
          texto={"Twitter"}
        />
      </div>
    </div>
  );
}

export default App;
