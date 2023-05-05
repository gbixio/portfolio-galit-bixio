import { Link } from "react-router-dom"
import { MenuStyle } from "./MenuStyle"

function Menu() {
  return (
    <MenuStyle>
        <Link style={{ textDecoration: 'none' }} to="/" >
            <li >  Home</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about" >    
            <li >About me</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/portfolio" >    
            <li >Portfolio</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/contact" >    
            <li >Contact</li>
        </Link>  
    </MenuStyle>
  )
}

export default Menu