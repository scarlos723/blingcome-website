import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import diskImg from '@/images/aboutUs/disk.svg'
export const Section = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  position: relative;
  .stars-img{
    display: none;
  }
  ${ResponsiveTo('md')}{
    background-image: url(${diskImg});
    background-repeat: no-repeat;
    background-size: 599.77px 599.77px;
    background-position-x: -200px;
    background-position-y: center;
  
  }
  ${ResponsiveTo('lg')}{
    height: 600px;
    .stars-img{
      display: block;
      width: 774px;
      height: 682px;
      position: absolute;
      top: 180px;
      left: -190px;
      object-fit: contain;
    }
  }
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
