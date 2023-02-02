import styled from "styled-components";

export const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    cursor: pointer;    
    list-style: none;
    margin-top: 20px;

    a{
       color: #FFF;
       svg{
        width: 30px;
        height: 30px;
       }

        &:hover{
        transform: scale(1.1);
        transition: .3s;
    }
    
    }

    

`