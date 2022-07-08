import styled from 'styled-components'
import starsImg from '@/images/payment/stars.png'
import diskImg from '@/images/aboutUs/disk.svg'
import { ResponsiveTo } from '../../hooks/UseResponsive'
export const Background = styled.div`
 
  padding-top: 100px;
  .custom-container{
    height: 432px;
  }

  ${ResponsiveTo('md')}{
    background: url(${starsImg}), url(${diskImg});
    background-repeat: no-repeat;
    background-size: auto, 599px 599px;
    background-position-x: -100px , 200%;
    background-position-y: 200px, 50px;
  }
  ${ResponsiveTo('lg')}{
    background-position-x: left , 175%;
    background-position-y: 200px, 50px;
  }
  ${ResponsiveTo('xl')}{
    background-position-x: left , 135%;
    background-position-y: 200px, 50px;
  }
`
export const Banner = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  height: 100%;
  h1{
      font-family: 'BigNoodleTitling';
      text-align: center;
  }
  ${ResponsiveTo('md')}{
    h1{
      width: 566px;

    }
  }
`
