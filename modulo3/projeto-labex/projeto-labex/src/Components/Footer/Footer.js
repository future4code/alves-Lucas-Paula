import React from 'react'
import { Fundo, Imagem } from './FooterCss'
import Facebook from '../../Img/Facebook.png'
import Instagram from '../../Img/Instagram.png'
import Twitter from '../../Img/Twitter.png'

function Footer() {
  return (
    <Fundo>
      <Imagem src={Facebook} alt="Facebook" />
      <Imagem src={Instagram} alt="Instagram" />
      <Imagem src={Twitter} alt="Twitter" />
    </Fundo>
  )
}

export default Footer