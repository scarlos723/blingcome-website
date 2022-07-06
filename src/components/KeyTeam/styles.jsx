

import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/UseResponsive'
import { Bubble, Section, Container, Title } from '@/styles/teamStyles'

export const BubbleKey = styled(Bubble)`
  padding: 2rem;
  ${ResponsiveTo('md')}{
    width: 177px;
    height: 177px;
  }
`

export { Section, Container, Title }
