import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/UseResponsive'
import { Link } from 'react-router-dom'
import card from '@/images/benefits/card.png'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem 5.5rem;
  max-width: 860px;
  margin: 0 auto;
  padding: 6rem 0 12rem 0;
`

export const Title = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  text-transform: uppercase;
  font-family: 'BigNoodleTitling';
  font-weight: 400;
  line-height: 110%;
`

export const Image = styled.img.attrs({ src: card, alt: 'Fashion girl' })`

`

export const ContentBox = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 7rem;
`

export const BenefitList = styled.ul`
  li {
    list-style-type: disc;
    margin-left: 1.25rem;
    text-align: left;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
  }
  li::marker {
    color: #F3C46B;
  }
`

export const AppLink = styled(Link).attrs({ className: 'custom-btn' })`
  padding: 0.75rem 0;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  line-height: 144.7%;
  text-align: center;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  text-decoration: none;
`
