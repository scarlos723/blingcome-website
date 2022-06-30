import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 92px 0;
  border-top: 0.5px solid #F3C46B;
  border-bottom: 0.5px solid #F3C46B;
  gap: 32px;
  .text-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    h2{
      font-family: 'BigNoodleTitling';
      font-weight: lighter;
      span{
        color: #F3C46B;
      }
    }
    p{
      font-size: 22px;
    }
    p,h2{
      text-align: center;
    }
    button{
      margin-top: 32px;
      font-size: 20px;
      height: 50px;
      background: #F3C46B;
      border-radius: 10px;
    }
  }
  .icons-container{
    display: flex;
    flex-direction: row;
    gap: 12px;
    article{
      display: grid;
      place-items: center;
      svg{
        width: 78px;
        height: 94px;
      }
      p{
        margin-top: 32px;
        font-size: 13px;
        font-weight: bolder;
        text-align: center;
        text-transform: uppercase;
        color: #F3C46B;
      }
    }
  }
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  

`
