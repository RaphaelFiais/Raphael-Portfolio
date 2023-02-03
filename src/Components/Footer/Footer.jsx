import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'
import logo from '../../assets/Logo.png'
import { SocialIcon } from '../Icon/style'
import Title from '../Title/Title'
import { Footers } from './style'

function Footer() {
  return (
    <Footers id='contacts'>
       <div className='infoFooter'>
       <img src={logo} alt="imagem" />
        <div className='contact'>
            <h2>Contatos</h2>
            <SocialIcon>
                       <a href="https://github.com/RaphaelFiais" target="_Blank"><BsGithub/></a> 
                        <a href="https://api.whatsapp.com/send?phone=5575982758321&text=Ol%C3%A1%20Raphael,%20vim%20pelo%20portif%C3%B3lio." target="_Blank" ><SiWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/raphaelfiais/" target="_Blank" ><BsLinkedin/></a>
            </SocialIcon>
            <p>Inovando e simplificando a interação com a web.</p>
        </div>
       </div>
        <div className='copy'>
            <p>Copyright © 2023 | Raphael Fiais</p>
        </div>
    </Footers>
  )
}

export default Footer