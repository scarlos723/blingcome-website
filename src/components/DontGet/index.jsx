import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { Grid, VideoSection } from './styles'
import blingcomeImg from '../../assets/images/home/blingcome.png'
export default function DontGet () {
  return (
    <Grid>
      <section >
        <VideoSection>
          <BsFillPlayFill color='white' size={41}/>
          <img src={blingcomeImg} alt="" />
        </VideoSection>
      </section>
      <section className='text-section'>
        <h2>Don’t get behind on fashion!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptate in harum minima magnam,
          deserunt quasi odit assumenda dolor saepe recusandae
          sapiente ab eaque explicabo illo?
          Eum necessitatibus aliquam quam quasi.</p>
        <button className='custom-btn'>Register</button>
      </section>
    </Grid>
  )
}
