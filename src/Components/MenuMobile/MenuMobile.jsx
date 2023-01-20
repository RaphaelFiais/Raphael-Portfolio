import { Container, ItensMob } from "./style"
import {IoClose} from 'react-icons/io5'


function MenuMobile({menuIsVisible, setMenuIsVisible}) {
  return (
    
    <Container isVisible={menuIsVisible}>
        <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <ul>
        <ItensMob><a>Home</a></ItensMob>
        <ItensMob><a>Sobre mim</a></ItensMob>
        <ItensMob><a>Projetos</a></ItensMob>
        <ItensMob><a>Contatos</a></ItensMob>
      </ul>
    </Container>
  
  )
}

export default MenuMobile