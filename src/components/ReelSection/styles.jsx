import styled from 'styled-components'
import imgReel1 from '../../assets/images/home/reel1.png'
import imgReel2 from '../../assets/images/home/reel2.png'
import imgReel3 from '../../assets/images/home/reel3.png'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 503px;
  position: relative;
  article{
    width: 224px;
    height: 338px;
    position: absolute;
    border-radius: 33px;
    svg{
      position: absolute;
      right: 10px;
      top:10px;
    }
  }
  article:nth-child(1){
    background-image: url(${imgReel1});
    z-index: 0;
  }
  article:nth-child(2){
    background-image: url(${imgReel2});
    top: 40px;
    left: 80px;
    z-index: 1;
  }
  article:nth-child(3){
    background-image: url(${imgReel3});
    top: 80px;
    left: 160px;
    z-index: 2;
    
  }
  article{
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    background-position-y: center;
  }
  ${ResponsiveTo('md')}{
    max-width: 615px;
    margin: 0 auto;
    article{
      width: 273.44px;
      height: 338px;
    }
    article:nth-child(1){
    
      z-index: 0;
    }
    article:nth-child(2){

      top: 45px;
      left: 170px;
    }
    article:nth-child(3){
      top: 90px;
      left: 340px;
    }
  }
  ${ResponsiveTo('xl')}{
    max-width: 1044px;
    margin: 0 auto;
    article{
      width: 464.18px;
      height: 275.61px;
    }
    article:nth-child(1){
      z-index: 0;
    }
    article:nth-child(2){

      top: 45px;
      left: 288px;
    }
    article:nth-child(3){
      top: 90px;
      left: calc(288px * 2);
    }
  }
`
