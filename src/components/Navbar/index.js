import React from 'react'
import { Nav, NavLink, NavIcon} from './NavbarElement'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p> 
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
