import React from 'react'
import ProjectItens from '../ProjectItens/ProjectItens'
import { Project, BoxProject } from './style'
import ProjectImage from '../../assets/project.png'
import Title from '../Title/Title'
import { SiJavascript } from 'react-icons/si'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'

function Projects() {

    return (
        <Project>
            <Title>Projetos</Title>
            <BoxProject>
            <ProjectItens template={ProjectImage} name = 'Teste1' icon1={<SiJavascript/>}/>
            <ProjectItens template={ProjectImage} name = 'Teste2'/>
            <ProjectItens template={ProjectImage} name = 'Teste3'/>
            </BoxProject>
        </Project>
    )
}

export default Projects