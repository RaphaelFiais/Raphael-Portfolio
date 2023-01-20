import styled, { css } from "styled-components";


export const Container = styled.nav`
    position: fixed;
    backdrop-filter: blur(3px);
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(90,157,57,0.2);   
    opacity: 0;    
    height: 0;
    transition: .5s;
    overflow: hidden;

    

    svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .6s;
        }

        ul{
            list-style: none;
            display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px; 
        }

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        transition: ease-in-out .8s;
        height: 100%;
        svg{
            transform: rotate(0deg);            
        }
    `}
`
export const ItensMob = styled.li`
   

    a{ 
        
        text-align: center;
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        color:  #fff;
        transition: .2s;
        text-decoration: none;

         &:hover{
            cursor: pointer;
            color: #7ED957;
         }
    }
`