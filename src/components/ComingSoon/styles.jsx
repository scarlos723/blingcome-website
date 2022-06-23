import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 42px;
  padding-bottom: 60px;
  .text-btn{
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
  }
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 621px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 721px;
  }
  ${ResponsiveTo('xl')}{
    grid-template-columns: 3fr 2fr;
    max-width: 1043px;
  }
`
export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  img{
    display: none;
    width: 246px;
    height: 215px;
  }
  h2{
    text-align: center;
  }
  .icon-clock{
      display: flex;
      margin-bottom: 24px;
    }
  ${ResponsiveTo('md')}{
    position: relative;
    img{
      display: block;
    }
    h2{
      
      padding-top: 20px;
      position: relative;
      top: -70px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50.06%, #000000 100%);
    }
    .icon-clock{
      display: none;
    }
  }
  ${ResponsiveTo('lg')}{

  }
  ${ResponsiveTo('xl')}{
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    h2{
      top: 0;
      padding: 0;
      max-width: 350px;
      br{
        display: none;
      }
    }
  }
`
export const CountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-clock{
    display: none;
  }
  ${ResponsiveTo('md')}{
    .icon-clock{
      display: flex;
    }
  }
  
`
export const Countdown = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-top: 16px;
  p,h2{
    color: #DCB772;
  }
  h2{
    font-size: 3.125rem;
    text-align: center;
  }
  p{
    margin-top: 12px;
    font-size: 1rem;
    text-align: center;
  }

`
