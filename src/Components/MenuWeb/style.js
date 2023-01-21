import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";


export const Menu = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    background-color: #151515;
    position: fixed;
    height: 75px;
    width: 100%;
    box-shadow:0 0 4px 0 rgba(255 , 255 , 255 , 0.1);
    z-index: 50;
    opacity: 0.9;
    img{
        width: 100%;
        max-width: 300px;

        @media screen and (max-width: 500px){        
        width: 50%;
        
    } 

        }

        @media screen and (max-width: 1002px){        
        padding: 0 15px ;
        
    } 
    
            
`

export const ItensMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    
    @media screen and (max-width: 1002px){        
        display: none;           
    } 
`
export const SocialMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 500px;
    gap: 50px;
    @media screen and (max-width: 1002px){        
        display: none;           
    } 
`
export const LinksMenu = styled.a`
    gap: 35px;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #7ED957;
    text-decoration: none;
    &:hover{
        color: #fff;
        cursor: pointer;
    }
`

export const SimpleMenu =  styled(GiHamburgerMenu)`
    height: 45px;
    width: 45px;
    background: #171717;
    color: #7ED957  ;
    display: none;
    &:hover{
        transform: scale(1.05);
        transition: .5s;
    }
    
    @media screen and (max-width: 1002px){
        display: block;
        
      }
`