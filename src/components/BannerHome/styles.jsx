import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 294px;
  margin: 0 auto;
  gap: 24px;
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 684px;
    gap: 63px;
    place-items: center;
  }
  ${ResponsiveTo('xl')}{
    grid-template-columns: 1fr 2fr 1fr;
    max-width: 1044px;
    gap: 40px;
  }
`

export const ImgSection = styled.section`
  width: 194.49px;
  height: 315px;
  img{
    width: 100%;
    height: 100%;
  }
  ${ResponsiveTo('md')}{
    width: 244px;
    height: 395.2px;
  }
  ${ResponsiveTo('lg')}{
    width: 288px;
    height: 466.46px;
  }
`
export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  button{
    width: 116px;
  }
  .icons-container{
    display: flex;
    gap: 12px;
  }
  ${ResponsiveTo('md')}{
    width: 307px;
  }
  ${ResponsiveTo('xl')}{
    width: 483px;
  }
`
export const MenuSection = styled.section`
  display: none;
  ul{
    display: flex;
    flex-direction: column;
    color: white;
  }
  ${ResponsiveTo('xl')}{
    display: flex;
    align-items: center;
    width: 202px;
    height: 325px;
    border-right: 1px solid #F3C46B;
    ul{
      width: 100%;
      padding-right: 20px;
      gap: 50px;
      li{
        text-align: right;
      }
    }
  }
`
