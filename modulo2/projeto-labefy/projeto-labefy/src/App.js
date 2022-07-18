import './App.css';
import React, { Component } from 'react'
import CriarPlaylist from './components/CriarPlaylist'
import VisualizarPlaylist from './components/VisualizarPlaylist'
import styled from 'styled-components'

const Container = styled.div`
  width: 1120px;
  height: 80vh;
  margin: 50px auto;
  padding: 50px;
  text-align: center;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  overflow: auto;
`
const TelaPrincipal = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  height: 100vh;
`

export default class App extends Component {
  render() {
    return (
      <TelaPrincipal>
        <Container>
          <CriarPlaylist />
          <VisualizarPlaylist />
        </Container>
      </TelaPrincipal>
    )
  }
}
