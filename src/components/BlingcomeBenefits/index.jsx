import React from 'react'
import { AppLink, BenefitList, ContentBox, Image, Section, Title } from './styles'

function BlingcomeBenefits() {
  return (
    <Section>
      <Title>Benefits of buying <span>BLINGCOME</span></Title>
      <Image />
      <ContentBox>
        <BenefitList>
          <li>Initial Dex Offering scheduled April 2022</li>
          <li>Limited token offering</li>
          <li>Internationally recognised senior executive team</li>
          <li>Blockchain powered technology</li>
          <li>Fast and secure transaction speeds</li>
          <li>Multiple exchange compatible (tokenomics)</li>
          <li>Access to a stabilised worldwide ecosystem</li>
          <li>Fantastic 2022/23 production slate</li>
        </BenefitList>
        <AppLink to='/'>
          Buy Now
        </AppLink>
      </ContentBox>
    </Section>
  )
}

export default BlingcomeBenefits