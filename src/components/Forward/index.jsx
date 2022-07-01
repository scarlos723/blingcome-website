import React from 'react'
import starImg from '@/images/tokenomics/starB.png'
import { Contain, Grid } from './styles'
export default function Forward () {
  return (
    <section className='custom-container'>
      <Contain>
        <h2> <span>Forward</span>  looking statement</h2>
        <Grid>
          <img src={starImg} alt="star blingcome image" />
          <div>
            <p>
              <span>BLINGCOME</span> tokenomics will be updated to
              maintain strength and support within our communities.
              We will implement a clear and robust strategy to
              maintain scalability and  efficiencies throughout
              the whole <span>BLINGCOME</span> ecosystem.
            </p>
          </div>
        </Grid>
      </Contain>
    </section>
  )
}
