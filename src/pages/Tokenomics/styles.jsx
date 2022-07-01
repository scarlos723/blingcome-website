import styled from 'styled-components'
import stars from '@/images/aboutUs/stars.png'
import { ResponsiveTo } from '../../hooks/UseResponsive'
export const Background = styled.div`

  ${ResponsiveTo('md')}{

  }
  ${ResponsiveTo('lg')}{
    background: url(${stars});
    background-repeat: no-repeat;
    background-size: auto;
    background-position-x: 490%;
    background-position-y: 50%;
  }
  ${ResponsiveTo('xl')}{
    
  }
`
