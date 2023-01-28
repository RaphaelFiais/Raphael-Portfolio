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
            <ProjectItens template={NikeStore} name = 'Nike Store'  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! "icon1={<FaHtml5/>} icon2={<FaCss3/>} icon3={<SiJavascript/>}/>
            <ProjectItens template={Rocketflix} name = 'RocketFlix' description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! " icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>} />
            <ProjectItens template={ToDoList} name = 'ToDoList' description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis eum numquam officia sequi temporibus distinctio sapiente incidunt atque. Iste delectus ab deserunt doloribus est eaque ipsam totam, voluptatibus temporibus accusantium! " icon1={<FaHtml5/>} icon2={<SiStyledcomponents/>} icon3={<FaReact/>}/>
            </BoxProject>
        </Project>
    )
}

export default Projects