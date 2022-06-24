import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Section = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  .girl{
    position: absolute;
    top: 0;
    width: 100%;
    display: none;
  }
  .girl-md{
    position: absolute;
    top: 0;
    width: 100%;
    display: none;
  }
  .girl-mb{
    position: absolute;
    top: 0;
    width: 100%;
  }
  .text{
    position: relative;
    z-index: 1;
    top: 60%;
    left: 5%;
  }

  ${ResponsiveTo('md')}{
    width: 614px;
    .girl-md{
      display: block;
    }
    .girl-mb{
      display: none;
    }
    .text{
      top: 50%;
    }
  }
  ${ResponsiveTo('xl')}{
    .girl-md{
      display: none;
    }
    .girl{
      display: block;
    }
    .text{
      top: 60%;
    }
    width: 1044px;
    height: 276px;
  }
`
