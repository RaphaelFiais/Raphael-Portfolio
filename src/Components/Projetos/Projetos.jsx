import React from 'react'
import ProjectItens from '../ProjectItens/ProjectItens'
import { Project, BoxProject } from './style'
import ProjectImage from '../../assets/project.png'
import NikeStore from '../../assets/NikeStore.png'
import Rocketflix from '../../assets/Rocketflix.png'
import ToDoList from '../../assets/ToDoList.png'
import Title from '../Title/Title'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'

function Projects() {

    return (
        <Project>
            <Title>Projetos</Title>
            <BoxProject>
            <ProjectItens template={NikeStore} name = 'Nike Store' projeto = 'https://raphaelfiais.github.io/Landing-page---Nike/'  repositorio ='https://github.com/RaphaelFiais/Landing-page---Nike' description = "Landing page da Nike feito com HTML, CSS e JavaScript a partir do Figma. A página apresenta alguns produtos e design moderno. O objetivo desse projeto foi praticar minhas habilidades nas tecnologias usadas."icon1={<FaHtml5/>} icon2={<FaCss3/>} icon3={<SiJavascript/>}/>
            <ProjectItens template={Rocketflix} name = 'RocketFlix'  projeto = 'https://rocketflixraphael.netlify.app/' repositorio= 'https://github.com/RaphaelFiais/Rocketflix'description = "Projeto Rocketflix com HTML, ReactJs, Styled-components, Rest API's a partir do desafio Rocketseat. A página apresenta uma coleção de filmes onde o usuario procura um filme aleatorio para assistir, caso não encontre será o dia de estudar. O objetivo desse projeto foi praticar o Rest API's nas tecnologias usadas." icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>} />
            <ProjectItens template={ToDoList} name = 'ToDoList' repositorio='https://github.com/RaphaelFiais/To-do-list' projeto='https://todolistraphael.netlify.app/' description = " Projeto ToDoList feito com HTML, ReactJs e Styled-components a partir do desafio DevClub. A página apresenta uma Lista de tarefas onde o usuario faz a sua lista do dia-a-dia podendo concluir ou deletar. O objetivo desse projeto foi aprender e praticar o ReactJs." icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>}/>
            </BoxProject>
        </Project>
    )
}

export default Projects