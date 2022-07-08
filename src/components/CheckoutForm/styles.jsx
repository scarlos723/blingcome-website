import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'
export const Form = styled.form`
  display: grid;
  margin: 40px 0;
  width: 90%;
  margin: 0 auto;
  .col-section{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height:400px;
      button{
        margin-right: auto;
      }
  }
  ${ResponsiveTo('lg')}{
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    .col-section{
      height: auto;
    }
  }
`
export const Error = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 90.7%;
  color: #F3C46B;
`

export const Exchanges = styled.div`
  p{
    text-align: center;
  }
  .grid-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;
    margin-top: 16px;
    section{
      width: 129px;
      border: 1px solid #F3C46B;
      border-radius: 7px;
      padding: 12px 20px;
      img{
        
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  ${ResponsiveTo('md')}{
    p{
      text-align: left;
    }
    .grid-container{
      flex-direction: row;
    }
  }
`
