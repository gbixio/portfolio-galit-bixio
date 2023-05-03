import { Link } from "react-router-dom"
import { MenuStyle } from "./MenuStyle"

function Menu() {
  return (
    <MenuStyle>
        <Link to="/" >
            <li style={{ textDecoration: 'none' }}>Home</li>
        </Link>
        <Link to="/about" >    
            <li style={{ textDecoration: 'none' }}>About me</li>
        </Link>
        <Link to="/portfolio" >    
            <li style={{ textDecoration: 'none' }}>Portfolio</li>
        </Link>
        <Link to="/contact" >    
            <li style={{ textDecoration: 'none' }}>Contact</li>
        </Link>  
    </MenuStyle>
  )
}

export default Menu