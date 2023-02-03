import styled from "styled-components";

export const ContainerHome =  styled.section`
    padding-top:150px;
    height: 100vh;
    background-color: #101010;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    flex-wrap: wrap;
    padding: 0 50px;
    
   
    p{
        margin-top: 20px;
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        color: #7ED957;
    }
    img{
        width: 70%;
        max-width: 700px;
    }

   
`

export const Boxinfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    animation: fadeIn 2s;

    @keyframes fadeIn {
            from{
                opacity: 0; 
                
            }
            
            to{
                opacity: 1;                
            }
        }

    @media screen and (max-width: 844px){
        justify-content: center;
        align-items: center;
        
    }
`