import React from 'react'
import { Menu, Nav, NavContainer } from './styles'
import { ReactComponent as Logo } from '@/icons/navbar/blingTextLogo.svg'
import { VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
export default function Navbar () {
  return (
    <NavContainer>
      <Nav>
        <div className='logo-container'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <Menu>
          <li>
            <Link to='about-us'>
            About us
            </Link>
          </li>
          <li>
            <Link to='tokenomics'>
            Tokenomics
            </Link>
          </li>
          <li>
            <Link to='about-us'>
            Benefits
            </Link>
          </li>
          <li>
            <Link to='about-us'>
            Our Team
            </Link>
          </li>
          <li>
            <Link to='about-us'>
            Ambassadors
            </Link>
          </li>
          <li>
            <Link to='about-us'>
            Contact
            </Link>
          </li>
        </Menu>

        <div className='btn-container'>
          <button className='custom-btn'>
          Register
          </button>
        </div>
        <div className='menu-icon'>
          <VscMenu color='white' size={36}/>
        </div>
      </Nav>
    </NavContainer>
  )
}
