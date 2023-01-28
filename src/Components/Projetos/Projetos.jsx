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
            <ProjectItens template={NikeStore} name = 'Nike Store' projeto = 'https://raphaelfiais.github.io/Landing-page---Nike/'  repositorio ='https://github.com/RaphaelFiais/Landing-page---Nike' description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! "icon1={<FaHtml5/>} icon2={<FaCss3/>} icon3={<SiJavascript/>}/>
            <ProjectItens template={Rocketflix} name = 'RocketFlix'  projeto = 'https://rocketflixraphael.netlify.app/' repositorio= 'https://github.com/RaphaelFiais/Rocketflix'description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! " icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>} />
            <ProjectItens template={ToDoList} name = 'ToDoList' repositorio='https://github.com/RaphaelFiais/To-do-list' projeto='https://todolistraphael.netlify.app/' description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! " icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>}/>
            </BoxProject>
        </Project>
    )
}

export default Projects