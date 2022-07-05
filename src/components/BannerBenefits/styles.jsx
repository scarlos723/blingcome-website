import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/UseResponsive'
import starB from '@/images/tokenomics/starB.png'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 6rem 0;
`

export const ImageBox = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
`

export const Image = styled.img.attrs({src: starB, alt: 'Blingcome Logo'})`
  width: 81px;
  height: 71px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-family: 'BigNoodleTitling';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 116.5%;
  text-align: center;
  text-transform: uppercase;
  color: #F3C46B;
`
export const TextBox = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.5rem;
`

export const SubTitle = styled.h2`
  ${ResponsiveTo('lg')}{
    font-size: 2.625rem;
    text-transform: uppercase;
  }
`

export const Text = styled.p`
  max-width: 285px;
`
