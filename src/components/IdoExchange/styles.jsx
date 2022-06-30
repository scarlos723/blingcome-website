import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/UseResponsive'

export const Contain = styled.div`
  display: grid;
  padding: 143px 0;
  
  .title{
    display: grid;
    gap: 20px;
    h2,p{
      text-align: center;
    }
    h2{
      font-family: 'BigNoodleTitling';
      font-weight: lighter;
    }
  }
  .text{
    display: grid ;
    margin-top: 44px;
    gap: 16px;
  }
`
export const Table = styled.table`
color: white;
text-transform: capitalize;
letter-spacing: -0.05em;
border-radius: 12px;
border-spacing: 0;
max-width: 100%;
margin-top: 37px;
td {
  border-bottom: 0.5px solid #F3C46B;
  a{
    text-decoration: none;
    color:white;
  }
  p{
    strong{
      color: #F3C46B;
    }
  }
}
td:nth-child(2){
  padding: 0.5rem 1rem;
}
td:first-child {

  p{
    text-align: right;
  }
}
tr td:last-child {
  border-right: none;
  word-break: break-word;
}
tr:last-child td {
  border-bottom: none;
}
${ResponsiveTo('md')} {
  margin-top: 52px;
  td:first-child {
  text-align: right;
  }
}
${ResponsiveTo('lg')} {
  margin-top: 59px;
  td:first-child {
    width: 150px;
  }
  td:nth-child(2) {
    padding: 0.75rem 1.5rem;
    p{
      font-size: 15px;
      letter-spacing: -0.05em;
    }
  }
}
${ResponsiveTo('xl')} {
  margin-top: 70px;
  td:first-child {
    width: 187px;
  }
}
`
