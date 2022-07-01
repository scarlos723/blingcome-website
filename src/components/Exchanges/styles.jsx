import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Section = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;

  ${ResponsiveTo('md')} {
    gap: 6rem;
    padding: 5rem;
  
  }
  ${ResponsiveTo('lg')}{
    padding: 4rem 2.75rem;
  
    gap: 4rem;
    
  }

  ${ResponsiveTo('xl')}{
    grid-template-columns: 385px 655px;
    padding: 9rem 5%;
  }
`

export const Title = styled.h2`
  color: #F3C46B;
  font-family: 'BigNoodleTitling';
  font-weight: lighter;
  text-transform: uppercase;
  text-align: center;
  ${ResponsiveTo('lg')} {
    grid-column: 1 / span 2;
  }
`

export const SubTitle = styled.h3`
  
  font-size: 1.125rem;
  letter-spacing: -3%;
  color: white;
  text-transform: uppercase;
  text-align: center;

  ${ResponsiveTo('md')} {
    font-size: 1.25rem;
    line-height: 48px;
  }
`
export const OurExchanges = styled.div`
  border-radius: 7px;
  border: 0.94px solid #F3C46B;
  padding: 1.5rem;
  width: 100%;
  max-width: 655px;
  ${ResponsiveTo('md')}{
    padding: 1.5rem 1.875rem 1.25rem; 
  }
`

export const BoxFutureExchanges = styled(OurExchanges)`
  max-width: 655px;
`

export const CoinsImage = styled.div`
  display: none;
  position: absolute;
  left: -400px;
  top:8px;
  ${ResponsiveTo('md')}{
    display:block;
    width: 600px;
    height: 600px;
    img{
      width: 100%;
    }
  }
`

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  img{
    padding: 0 1.5rem;
    height:60px;
    border-radius: 6.6px;
    border: 0.94px solid #F3C46B;
    width: 100%;
    max-width: 150px;
    object-fit: contain;
  }
  ${ResponsiveTo('md')}{
    gap: 1.25rem;
  }
`
