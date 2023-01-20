import styled from "styled-components";

export const Skill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #171717;
    padding: 50px 0;

    h1{
        font-weight: 500;
        font-size: 40px;
        line-height: 33px;
        color: #7ED957;
        margin-bottom: 30px;
       
    }
`
export const ContentSkill = styled.div`
    border-top: 1px solid #7ED957;
    width: 100%;
    height: auto;    
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
            gap:30px;
            padding: 20px 20px;
        }
   
`
export const BoxSkill = styled.div`
    display: flex;
    width: 50%;
    max-width: 150px;
    height: 160px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: #282828;
    border-radius: 15px;
        svg{
            color: #7ED957;
            width: 100%;
            max-width: 70px;
            height: auto;
          
        }
        
        >p{
        margin-top: 15px;
        font-weight: 500;
        font-size: 25px;
        line-height: 33px;
        color: #Fff;
        @media screen and (max-width: 700px) {
            font-size: 20px;
        }
        }


       

    &:hover{
        transition: .5s;
        border: 1px solid #9FEA79 ;
        transform: scale(1.02);
    }
`