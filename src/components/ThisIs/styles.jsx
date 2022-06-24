import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width:298px;
  gap: 40px;
  margin: 50px auto;
  .text-container{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  ${ResponsiveTo('md')}{
    max-width: 600px;
    margin: 90px auto;
    .text-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  ${ResponsiveTo('lg')}{
    max-width: 721px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 100px auto;
   
    .title{
      display: flex;
      align-items: flex-end;
      height: 100%;
      width: 321px;
      h2{
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        width: 321px;
      }
    }

  }
  ${ResponsiveTo('xl')}{
    max-width: 1043px;
  }
`

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
`
