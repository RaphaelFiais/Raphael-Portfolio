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
        <ItensMob><a href='#home' onClick={() => setMenuIsVisible(false)}>Home</a></ItensMob>
        <ItensMob><a href='#about' onClick={() => setMenuIsVisible(false)} >Sobre mim</a></ItensMob>
        <ItensMob><a href='#projects' onClick={() => setMenuIsVisible(false)} >Projetos</a></ItensMob>
        <ItensMob><a href='#contacts' onClick={() => setMenuIsVisible(false)} >Contatos</a></ItensMob>
      </ul>
    </Container>
  
  )
}

export default MenuMobile