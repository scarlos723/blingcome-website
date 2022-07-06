import React from 'react'
import { keyTeamData } from './data'
import { BubbleKey, Container, Section, Title } from './styles'

function KeyTeam() {
  return (
    <Section>
      <Title><span>Blingcome</span> Key Team Members</Title>
      <Container>
        {keyTeamData.map((item, index) => (
          <BubbleKey key={index}>
            <h3>{item.position}</h3>
            <h4>{item.name}</h4>
          </BubbleKey>
        ))}
      </Container>
    </Section>
  )
}

export default KeyTeam
