import React from 'react'
import { Contain, TitleSection } from './styles'
import girlImg from '@/images/tokenomics/girlImg.png'

export default function ProposedTokenomics () {
  return (
    <section className='custom-container'>
      <Contain>
        <div>
          <TitleSection>
            <img src={girlImg} alt="girl image" />
            <h1>Proposed <span>tokenomics</span></h1>
          </TitleSection>
        </div>
        <div>
          <h2>Cliff and vesting</h2>
        </div>
      </Contain>
    </section>
  )
}
