import React from 'react'

import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <div>
          <Navbar expand='lg' style= {{backgroundColor: 'yellow'}}>
                
                <Nav>
                
                <NavLink style={linkStyle} className="d-inline p-2"  to="/">Home</NavLink>
                <NavLink style={linkStyle} className="d-inline p-2  " to="/contact">Contact</NavLink>
                <NavLink style={linkStyle} className="d-inline p-2  " to="/prices">Prices</NavLink>

                </Nav>
            </Navbar>
        </div>
    )
}

const linkStyle = {
    color: 'black',
      
      textShadow: '2px 2px 8px salmon',
      textDecoration: 'none',
    marginRight: '30px'
  }




export default Header

