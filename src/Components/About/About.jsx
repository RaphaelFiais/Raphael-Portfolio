import Myphoto from "../../assets/pngegg.png"
import React from 'react'
import Title from '../Title/Title'
import { SobreMim, TextAbout } from './style'


function About() {
    return (

        <div id="about">
            <SobreMim >
            <Title>Sobre mim</Title>
            
                <TextAbout>
                <img src={Myphoto} alt="" />
                    <p>
                        Como Desenvolvedor front-end, tenho habilidades em HTML, CSS, JavaScript, ReactJs e NodeJs.
                        Gosto de trabalhar em equipe e sempre estou disponível para aprender mais e evoluir minhas habilidades.
                        Tenho experiência em desenvolvimento de aplicativos web, bem como em trabalhar com diferentes frameworks e bibliotecas.
                        Estou sempre disposto a me desafiar e buscar novos desafios para crescer como profissional.
                    </p>
                </TextAbout>
                
            </SobreMim>
        </div>

    )
}

export default About