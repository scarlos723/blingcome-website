import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem 3.75rem;
  justify-content: center;
  max-width: 566px;
  margin: 0 auto;
  padding: 6rem 0rem 12rem;
`

export const Title = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  text-transform: uppercase;
  font-family: 'BigNoodleTitling';
  font-weight: 400;
  line-height: 110%;
`
