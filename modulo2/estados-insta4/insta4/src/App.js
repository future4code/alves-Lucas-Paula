import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const CampoTexto = styled.input`
  margin-top: 10px
`

const Botao = styled.button`
  margin: 10px 0;
`

class App extends React.Component {

  state = {
    post: [{
      nomeUsuario: "Joazinho",
      fotoUsuario: "https://picsum.photos/50/45",
      fotoPost: "https://picsum.photos/200/145",
    }],
  }

  adicionaPost = () => {
    const novoPost = {

      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    const novoPosts = [...this.state.post, novoPost];

    this.setState({post: novoPosts, testeLogico: true});
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  render() {

    const criandoPost = this.state.post.map((pessoa) => {
        return <Post
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
      />
    });

    return (
      <MainContainer>
        <CampoTexto onChange={this.onChangeInputNomeUsuario} placeholder="Nome de Usuario"></CampoTexto>
        <CampoTexto onChange={this.onChangeInputFotoUsuario} placeholder="Foto do Usuario"></CampoTexto>
        <CampoTexto onChange={this.onChangeInputFotoPost} placeholder="Foto do Post"></CampoTexto>
        <Botao onClick={this.adicionaPost}>ENVIAR</Botao>

        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={'DK'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/155'}
        />

        {criandoPost}

      </MainContainer>

    );
  }
}

export default App;
