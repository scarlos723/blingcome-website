import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Section = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 60px;
  ${ResponsiveTo('md')}{
    max-width: 614px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 872px;
    display: grid;
    grid-template-columns:  380px 1fr;
    place-content: center;
    
  }
  ${ResponsiveTo('xl')}{
    gap: 160px;
    max-width: 1062px;
  }
`

export const BoxImg = styled.section`
  width: 100%;
  img{
    width: 100%;
  }
`
export const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 20px;
  h1{
    font-family: 'BigNoodleTitling';
    font-weight: lighter;
  }
  img{
    width: 100%;
  }
  ${ResponsiveTo('lg')}{
    img{
      width: auto;
    }
  }
  ${ResponsiveTo('xl')}{
    h1{
      font-size: 48px;
    }
  }
`
