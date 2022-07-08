import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'
import starsImg from '@/images/aboutUs/stars.png'
export const Background = styled.div`

  ${ResponsiveTo('md')}{
    background-image: url(${starsImg});
    background-repeat: no-repeat;
    background-size: 435px 384px;
    background-position-x: 165%;
    background-position-y: 55%;
  }
  ${ResponsiveTo('lg')}{
    background-position-x: 145%;
    background-position-y: 40%
  }
  ${ResponsiveTo('xl')}{
    background-position-x: 125%;
    background-position-y: 53%;
  }

`
export const ExchangesSection = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  padding-top: 111px;
  h3{
    max-width: 714px;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 60px;
  padding-top:44px;
  padding-bottom: 100px;
  align-items: center;
  section{
    width: 180.18px;
    height: 57.71px;
    border: 1px solid #F3C46B;
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 0 28px;
    img{
      width: 100%;
    }
  }
  ${ResponsiveTo('md')}{
    max-width: 614px;
    padding-top:84px;
    padding-bottom: 120px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 872px;
    flex-direction: row;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1062px;
    gap: 128px;
  }

`
export const OrSection = styled.section`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 28px;
  p{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  hr{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #F3C46B;
    width: 120px;
    }

  ${ResponsiveTo('md')}{
    hr{
      width: 300px;
    }
  }
  ${ResponsiveTo('lg')}{
    hr{
      width: 350px;
    }
  }
  ${ResponsiveTo('xl')}{
    hr{
      width: 500px;
    }
  }

`
export const FormSection = styled.section`
  margin-top: 108px;
  width: 100%;
  h3{
    text-align: center;
    margin: 0 auto;
    margin-bottom: 96px;
  }
`
