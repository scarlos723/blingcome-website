import styled from 'styled-components'
import bgImg from '@/images/tokenomics/bgImg.png'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 412px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 0;
  background-position-y: center;
  h2{
    font-family: 'BigNoodleTitling';
    text-align: center;
  }
  ${ResponsiveTo('md')}{
    height: 1196px;
  }
  ${ResponsiveTo('lg')}{
    background-size: 746.35px 1065.62px;
    background-position-y: bottom;
  }
`
export const TitleSection = styled.div`

  display: flex;
  width: 100%;
  flex-direction: column;
  img{
    width: 100%;
  }
  h1{
    margin-top: -20px;
    font-family: 'BigNoodleTitling';
    text-align: center;
    span{
      color: rgba(243, 196, 107, 1);
    }
  }
  ${ResponsiveTo('md')}{
    width: 505px;
  }
`
