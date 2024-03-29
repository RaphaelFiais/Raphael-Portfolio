import React from "react";
import { FaCss3, FaElementor, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiWordpress } from "react-icons/si";
import NikeStore from "../../assets/NikeStore.png";
import Rocketflix from "../../assets/Rocketflix.png";
import ToDoList from "../../assets/ToDoList.png";
import lavaMax from "../../assets/lavaMax.png";
import systemFinance from "../../assets/system-finances.png";
import ProjectItens from "../ProjectItens/ProjectItens";
import Title from "../Title/Title";
import { BoxProject, Project } from "./style";

function Projects() {
  return (
    <Project id="projects">
      <Title>Projetos</Title>
      <BoxProject>
        <ProjectItens
          template={systemFinance}
          name="Finance"
          projeto="https://rffinancialsystem.netlify.app/"
          description="O Sistema de Finanças é um projeto que desenvolvi com o objetivo de aprimorar meus conhecimentos em React e JavaScript. O projeto tem como finalidade ajudar na organização das finanças pessoais, permitindo que o usuário adicione entradas e saídas de valores, e o sistema realiza o cálculo das transações realizadas, exibindo o total de saldo, total de saídas e total de entradas."
          icon1={<FaReact />}
          icon2={<SiJavascript />}
          icon3={<SiStyledcomponents />}
        />
        <ProjectItens
          template={NikeStore}
          name="Nike Store"
          projeto="https://raphaelfiais.github.io/Landing-page---Nike/"
          repositorio="https://github.com/RaphaelFiais/Landing-page---Nike"
          description="Landing page da Nike feito com HTML, CSS e JavaScript a partir do Figma. A página apresenta alguns produtos e design moderno. O objetivo desse projeto foi praticar minhas habilidades nas tecnologias usadas."
          icon1={<FaHtml5 />}
          icon2={<FaCss3 />}
          icon3={<SiJavascript />}
        />
        <ProjectItens
          template={Rocketflix}
          name="RocketFlix"
          projeto="https://rocketflixraphael.netlify.app/"
          repositorio="https://github.com/RaphaelFiais/Rocketflix"
          description="Projeto Rocketflix com HTML, ReactJs, Styled-components, Rest API's a partir do desafio Rocketseat. A página apresenta uma coleção de filmes onde o usuario procura um filme aleatorio para assistir, caso não encontre será o dia de estudar. O objetivo desse projeto foi praticar o Rest API's nas tecnologias usadas."
          icon1={<FaHtml5 />}
          icon2={<SiStyledcomponents />}
          icon3={<FaReact />}
        />
        <ProjectItens
          template={ToDoList}
          name="ToDoList"
          repositorio="https://github.com/RaphaelFiais/To-do-list"
          projeto="https://todolistraphael.netlify.app/"
          description=" Projeto ToDoList feito com HTML, ReactJs e Styled-components a partir do desafio DevClub. A página apresenta uma Lista de tarefas onde o usuario faz a sua lista do dia-a-dia podendo concluir ou deletar. O objetivo desse projeto foi aprender e praticar o ReactJs."
          icon1={<FaHtml5 />}
          icon2={<SiStyledcomponents />}
          icon3={<FaReact />}
        />
        <ProjectItens
          template={lavaMax}
          name="Lavamax"
          projeto="http://lavmaxlavanderia.com.br/"
          description="O site institucional do LavaMax Lavanderias foi feito com Wordpress e Elementor. Com o design simples, interativo e moderno, a página apresenta o ambiente de trabalho e alguns serviços."
          icon1={<SiWordpress />}
          icon2={<FaElementor />}
        />
      </BoxProject>
    </Project>
  );
}

export default Projects;
