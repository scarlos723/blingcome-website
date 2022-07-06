import React from 'react'
import { operationalTeamData } from './data'
import { Section, Title, Container1, BubbleOp } from './styles'

function OperationalTeam() {
  return (
    <Section>
      <Title>
        <span>blingcome</span> Operational Team
      </Title>
      <Container1>
        {
          operationalTeamData.map((item, index) => {
            return (
              <BubbleOp key={index}>
                <h3>
                  {item.position}
                </h3>
                <h4>
                  {item.name}
                </h4>
              </BubbleOp>
            )
          })
        }
      </Container1>
    </Section>
  )
}

export default OperationalTeam
