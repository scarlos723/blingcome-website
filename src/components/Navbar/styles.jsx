import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const NavContainer = styled.header`
  display: grid;
  place-items: center;
  padding: 27px 0;
  ${ResponsiveTo('md')} {
    padding: 36px 0;
  }
  ${ResponsiveTo('lg')} {
    padding: 54px 0;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 305px;
  .logo-container{
    width: 170px;
    height: 59px;
    svg{
      width: 100%;
      height: 100%;
    }
  }
  .btn-container{
    display: none;
  }
  ${ResponsiveTo('md')}{
    display: grid ;
    grid-template-columns: 1fr 6fr 1fr;
    max-width: 622px;
    place-content: center;
    place-items: center;
    .btn-container{
      display: block;
    }
    .menu-icon{
      display: none;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 900px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1061px;
  }
`

export const Menu = styled.ul`
  display: none;
  color: white;
  li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
    a{
      text-decoration: none;
      color: white;
    }
  }
  ${ResponsiveTo('md')}{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`
