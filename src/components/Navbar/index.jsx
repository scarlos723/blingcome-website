import React from 'react'
import { Menu, Nav, NavContainer } from './styles'
import { ReactComponent as Logo } from '@/icons/navbar/blingTextLogo.svg'
import { VscMenu } from 'react-icons/vsc'
export default function Navbar () {
  return (
    <NavContainer>
      <Nav>
        <div className='logo-container'>
          <Logo />
        </div>

        <Menu>
          <li>About us</li>
          <li>Blingcome</li>
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
