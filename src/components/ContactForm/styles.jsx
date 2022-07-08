import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Container = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 91px;
  h5{
    font-family: 'Montserrat';
    font-style: normal;
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 0;
  }
  ${ResponsiveTo('md')}{
    max-width: 614px;
  }
  ${ResponsiveTo('lg')}{
    width: 100%;
    max-width: 872px;
  }
  ${ResponsiveTo('xl')}{
    max-width: 1172px;
  }

    
`
export const Form = styled.form`
  
  width: 100%;
  .grid{
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    gap: 82px;
    section{
      width: 100%;
      .grid-name{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .grid-city{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  ${ResponsiveTo('md')}{
    .grid{
      section{
      .grid-name{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .grid-city{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        }
      }
    }
  }
  ${ResponsiveTo('xl')}{
    .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    section{
      .grid-name{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .grid-city{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        input{
          display: flex;
          width: auto;
          padding: 0;
        }
        }
      }
    }
  }
  
`
export const InputContainer = styled.div`
  display: grid;
  padding: 20px 0 18px 0;
  label{
    color: white;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 22px;
    text-align: left;
  
    }
  input, textarea{
    color: white;
    display: grid;
    height: 49px;
    outline: none;
    background-color: transparent;
    border: 0.5px solid #F3C46B;
    border-radius: 6px;
    padding: 0 40px;
  }
  textarea{
    resize: none;
    height: 289px;
  }

`
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 52px;
  .custom-btn-gray{
    margin-right: auto;
  }
  .custom-btn{
    margin-left: auto;
  }
`
