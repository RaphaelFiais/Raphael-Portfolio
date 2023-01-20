
import styled from "styled-components";


export const SobreMim = styled.section`
    width: 100%;
    height:auto ;
    background-color: #171717;
    padding: 170px 0 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   


    p{
        margin-left: 150px;        
        font-weight: 500;
        font-size: 17px;
        line-height: 33px;
        color: #fff;
        max-width: 800px;
        
    }
    img{
       max-width: 400px;
       border-radius: 15px;
    }
    
   
`
export const TextAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 50px;
    @media screen and (max-width: 917px){ 
        flex-direction: column;
        h1{
            text-align: center;
        }  
        p{  
            margin: 0;
            margin-top: 50px;
            text-align: center;
        }
    } 
`