
import styled from "styled-components";


export const SobreMim = styled.section`
    width: 100%;
    height:auto ;
    background-color: #171717;
    padding: 170px 50px 80px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
   
`
export const TextAbout = styled.div`
    width:100%;  
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 50px;
    gap: 50px;
    padding: 0 20px;

    img{
        width:90%;
       max-width: 400px;
       border-radius: 15px;
    }

    p{
        font-weight: 500;
        font-size: 17px;
        line-height: 33px;
        color: #fff;
        max-width: 800px;
        @media screen and (max-width: 500px) {
            font-size: 15px;
            line-height: 25px;
            
        }
        
    }



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