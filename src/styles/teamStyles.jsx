import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/UseResponsive'

export const Section = styled.section`
  background-color: transparent;
  padding: 2rem 1rem;
  padding-top: 76px;
  ${ResponsiveTo('md')} {
    padding: 0 90px;
    padding-top: 84px;
  }
  ${ResponsiveTo('lg')} {
    padding: 6rem 10%;
    padding-top: 84px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  justify-content: center;
  ${ResponsiveTo('md')} {
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #F3C46B;
    padding-bottom: 80px;
    max-width: 559px;
  }
  ${ResponsiveTo('lg')} {
    max-width: 1102px;
    padding-bottom: 140px;
  }
`

export const Title = styled.h2`
font-family: 'BigNoodleTitling';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 116.5%;
text-align: center;
text-transform: uppercase;
  margin-bottom: 40px;
  ${ResponsiveTo('md')} {
    margin-bottom: 80px;
  }
`

export const Bubble = styled.article`
  width: 164.11px;
  height: 163.43px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 50%;
  border: 1px solid #F3C46B;
  padding: 1rem;
  h3,h4{
    font-style: normal;
    font-weight: 400;
    text-align: center;
  }
  h3{
    font-family: 'BigNoodleTitling';
    font-size: 15px;
    line-height: 17px;
    text-transform: uppercase;
    color: #F3C46B;
  }
  h4{
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
  }
  ${ResponsiveTo('md')} {
    width: 224.04px;
    height: 223.1px;
    gap: 16px;
  }
`
