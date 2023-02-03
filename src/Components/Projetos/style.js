import styled from "styled-components";



export const Project = styled.section`
width: 100%;
height: auto;
background-color: #101010;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 140px 50px;

`
export const BoxProject = styled.div`
    margin-top: 50px;
    display: grid ;
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`