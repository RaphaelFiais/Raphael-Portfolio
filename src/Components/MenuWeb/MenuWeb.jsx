import logo from '../../assets/Logo.png'
import { Menu, ItensMenu, LinksMenu, SimpleMenu} from './style.js'


const MenuWeb = ({ setMenuIsVisible }) => {
    return (
    <header>
      <Menu>
        <img src={logo} alt="imagem" />
        <ItensMenu>
          <li><LinksMenu href='#home'>Home</LinksMenu></li>
          <li><LinksMenu href='#about'>Sobre mim</LinksMenu></li>
          <li><LinksMenu href='#projects'>Projetos</LinksMenu></li>
          <li><LinksMenu href='#contacts'>Contatos</LinksMenu></li>
        </ItensMenu>
        <SimpleMenu onClick={() => { setMenuIsVisible(true) }} />
        
      </Menu>
    </header>

    
  )
}

export default MenuWeb
