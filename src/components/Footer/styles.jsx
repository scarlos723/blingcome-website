import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const FooterContainer = styled.footer`
  display: grid;
  background: #171616;
  place-items: center;
  padding-top: 52px;
  padding-bottom: 64px;
  ${ResponsiveTo('md')} {
    padding-top: 20px;
    padding-bottom: 36px;
  }
`

export const Contain = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  max-width: 301px;
  gap: 30px;
  ${ResponsiveTo('md')} {
    max-width: 676px;
    gap: 16px;
  }
`

export const TextGrid = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 17px;
  li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    color: white;
    font-size: 0.75rem;
    text-align: center;
  }
  ${ResponsiveTo('md')}{
    flex-direction: row;
  }
`
