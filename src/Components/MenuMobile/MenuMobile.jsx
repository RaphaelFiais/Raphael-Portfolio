import { Container, ItensMob } from "./style"
import {IoClose} from 'react-icons/io5'
import { useEffect } from "react"


function MenuMobile({menuIsVisible, setMenuIsVisible}) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
        }, [menuIsVisible])
  return (
    
    <Container isVisible={menuIsVisible}>
        <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <ul>
        <ItensMob><a href='#home'>Home</a></ItensMob>
        <ItensMob><a href='#about'>Sobre mim</a></ItensMob>
        <ItensMob><a href='#projects'>Projetos</a></ItensMob>
        <ItensMob><a href='#contacts'>Contatos</a></ItensMob>
      </ul>
    </Container>
  
  )
}

export default MenuMobile