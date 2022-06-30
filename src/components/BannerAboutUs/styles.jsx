import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  ${ResponsiveTo('lg')}{
    .text-box{
      width: 285px;
    }
  }
 
`
