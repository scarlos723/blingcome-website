import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 102px;
  h2{
    font-family: 'BigNoodleTitling';
    font-weight: lighter;
    text-align: center;
  }

`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-content: center;
    place-items: center;
    gap: 40px;
  }
  ${ResponsiveTo('lg')}{
    gap: 88px;
  }
`
