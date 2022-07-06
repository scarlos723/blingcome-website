import React from 'react'
import { Container, TextBox, Image, TeamImageBox, Title } from './styles'

function BannerOurTeam() {
  return (
    <Container>
      <TeamImageBox>
        <Image />
        <Title>Meet Us</Title>
      </TeamImageBox>
      <TextBox>
        <h1>Our Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
      </TextBox>
    </Container>
  )
}

export default BannerOurTeam
