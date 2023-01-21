import styled, { css } from "styled-components";

export const ProjectItem = styled.div`
    position: relative;
    max-width: 550px;
    margin: 0 30px 0 30px;
    background-color: #282828;
    border-radius:  15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
       
    img{
            width: 100%;
            max-width: 400px;
            border: 1px solid #282828;
            border-radius: 15px;
            opacity: 0.5;
            @media screen and (max-width: 1000px){
                width: 100%;
                max-width: 300px;                
            }
      }

      .projectType {
            position: absolute;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;

            svg{
                color: #7ED957;
                height: auto;
                width: 30px;
            }
        }

    
    .infoProject {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        width: 100%;
        background-color: #7ED957;
        position: absolute;
        height: 0;
        overflow: hidden;
        top: 99%;
        border-radius: 0 0 15px 15px ;
        z-index: 2;

        h2{
            font-weight: 500;
            font-size: 22px;
            line-height: 33px;
        }
        
        button{
            background-color: #101010;
            border: none;
            color: #7ED957;
            border-radius: 10px;
            padding: 5px 7px;
            cursor: pointer;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            &:hover{
                //opacity: 0.8;
                color: #FFFFFF;
            }

        }        
        
    }

    &:hover{        
        border-radius: 15px 15px 0 0;

        .projectType{
            display: none;
        }

        img{
            border: 1px solid  #7ED957 ;
            border-bottom: none;
            border-radius: 15px 15px 0 0 ;
            opacity: 1;
            transition: opacity .5s;
        }
        
        .infoProject{
            height: 40px;
            overflow: visible;
            transition: .4s;
            border: 1px solid  #7ED957 ;
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9900;
    background: #20202095;
    backdrop-filter: blur(3px) ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0;
    overflow: hidden;
        

    div{
        position: relative;
        width: 90%;
        max-width: 1200px;
        background-color: #7ED957;

        svg{
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    ${({isOpen}) => isOpen && css`
        width: 100%;
    `
    }
`