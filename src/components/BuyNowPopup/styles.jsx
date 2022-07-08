import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Container = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.58);
`

export const Contain = styled.section`
  display: flex;
  position: relative;
  width: 90%;
  height: 400px;
  svg{
    cursor: pointer;
    position: absolute;
    top:10px;
    right: 10px;
    z-index: 2;
    path{
      stroke: #F3C46B;
    }
  }
  ${ResponsiveTo('md')}{
    width: 588px;
    height: 528px;
  }
  ${ResponsiveTo('lg')}{
    height: 419px;
  }
`
export const Article = styled.article`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 20px 12px;
  background: #0C0C0C;
  border-radius: 26px;
  box-shadow: 0px 8px 27px rgba(243, 196, 107, 0.34);
  h3,p{
    text-align: center;
  }

  button{
    margin: auto;
  }

  ${ResponsiveTo('md')}{
    padding: 68px 32px;
    p{
    font-size: 20px;
    margin-top: 8px;
    }
    h3{
      text-transform: uppercase;
    }
  }
`
