import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/UseResponsive'
import {
  Bubble,
  Container,
  Section,
  Title,
} from '@/styles/teamStyles'

export const Container1 = styled(Container)`
  justify-content: center;
  ${ResponsiveTo('lg')} {
    max-width: 1108px;
    border-bottom: none;
  }
  ${ResponsiveTo('xl')} {
    justify-content: center;
  }
`
export const BubbleOp = styled(Bubble)`
  width: 164.11px;
  height: 163.43px; 
  gap: 4px;
  h3,h4{
    font-size: 0.8125rem;
    line-height: 14px;
  }
  h3{
    letter-spacing: -0.05em;
  }
  ${ResponsiveTo('Tablet')} {
    width: 177px;
    height: 177px;
    h3,h4{
      font-size: 1rem;
      line-height: 20px;
    }
    h4{
      letter-spacing: -0.05em;
    }
  }
`

export { Section, Title }
