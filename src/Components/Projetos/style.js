import styled from "styled-components";



export const Project = styled.section`
width: 100%;
height: auto;
background-color: #101010;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 140px 0;

`
export const BoxProject = styled.div`
    margin: 50px 0;
    display: flex ;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        
    }
`