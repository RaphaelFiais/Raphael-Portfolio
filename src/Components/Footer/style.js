import styled from "styled-components";

export const Footers = styled.div`
    background: #171717;

    .infoFooter{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 50px;
        gap: 60px;
        flex-wrap: wrap;
        img{
            width: 100%;
            max-width: 400px;
        }
        .contact{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;

            h2{
        text-align: center;
        font-weight: 500;
        font-size: 35px;
        line-height: 33px;
        color: #7ED957;
        }
        p{
            font-weight: 500;
            font-size: 17px;
            line-height: 33px;
            color: #fff;
            text-shadow: 1px 5px 18px #7ED957;
        }
           
            
        }
        
    }

    .copy{
        background: #101010;
        text-align: center;
        color: #fff;
        font-weight: 500;
        font-size: 15px;
        line-height: 33px;
        padding: 5px 0;
    }
`