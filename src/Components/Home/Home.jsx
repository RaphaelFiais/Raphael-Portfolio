
import Image from '../../assets/teste.png'
import { ContainerHome, Boxinfo } from './style'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { SocialIcon } from '../Icon/style'
import Title from '../Title/Title';


function Home() {
  return (
    <ContainerHome id="home" >                    
                    <Boxinfo>
                    <Title>Welcome!!</Title>
                    <p>Desenvolvedor Front-end</p>
                    <SocialIcon>
                       <a href="https://github.com/RaphaelFiais" target="_Blank"><BsGithub/></a> 
                        <a href="https://api.whatsapp.com/send?phone=5575982758321&text=Ol%C3%A1%20Raphael,%20vim%20pelo%20portif%C3%B3lio." target="_Blank" ><SiWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/raphaelfiais/" target="_Blank" ><BsLinkedin/></a>
                    </SocialIcon>                    
                    </Boxinfo>                    
                    <img src={Image} alt="" />
        </ContainerHome>  
  )
}

export default Home