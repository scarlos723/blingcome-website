import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
  .text-section{
    display: none;
  }
  ${ResponsiveTo('lg')}{
    gap: 75px;
    align-items: center;
    margin: 100px 0;
    .text-section{
      display: flex;
      flex-direction: column;
      
      gap: 20px;
      width: 323px;
      button{
        margin-right: auto;
      }
    }
  }
`
export const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 294px;
  height: 190px;
  background: #0C0C0C;
  border: 1px solid #F2DF8D;
  box-shadow: 0px 7px 20px rgba(242, 223, 141, 0.3);
  border-radius: 21px;
  position: relative;
  svg{
    position: absolute;
    right: 10px;
    top:10px;
  }
  img{
    height: 100%;
  }
  ${ResponsiveTo('md')}{
    width: 449px;
    height: 290.17px;
  }
  ${ResponsiveTo('xl')}{
    width: 647px;
    height: 367.78px;
  }
  `
