import logo from '../../assets/Logo.png'
import { Menu, ItensMenu, LinksMenu, SimpleMenu} from './style.js'


const MenuWeb = ({ setMenuIsVisible }) => {
    return (
    <header>
      <Menu>
        <img src={logo} alt="imagem" />
        <ItensMenu>
          <li><LinksMenu>Home</LinksMenu></li>
          <li><LinksMenu>Sobre mim</LinksMenu></li>
          <li><LinksMenu>Projetos</LinksMenu></li>
          <li><LinksMenu>Contatos</LinksMenu></li>
        </ItensMenu>
        <SimpleMenu onClick={() => { setMenuIsVisible(true) }} />
        
      </Menu>
    </header>

    
  )
}

export default MenuWeb
