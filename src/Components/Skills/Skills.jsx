import React from 'react'
import { SiJavascript } from 'react-icons/si'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { BoxSkill, ContentSkill, Skill } from './style'
import { BsGithub } from 'react-icons/bs'
import Title from '../Title/Title'


function Skills() {
    return (
        <Skill>
            <h1>Skills</h1>
            <ContentSkill>
            <BoxSkill>
                <FaHtml5 />
                <p>HTML</p>
            </BoxSkill>
            <BoxSkill>
                <FaCss3/>
                <p>CSS</p>
            </BoxSkill>
            <BoxSkill>
                <SiJavascript />
                <p>JavaScript</p>
            </BoxSkill>
            <BoxSkill>
                <FaReact/>
                <p>ReactJs</p>
            </BoxSkill>
            <BoxSkill>
                <FaNodeJs />
                <p>NodeJs</p>
            </BoxSkill>
            <BoxSkill>
                <BsGithub />
                <p>Github</p>
            </BoxSkill>
            </ContentSkill>

        </Skill>
    )
}

export default Skills