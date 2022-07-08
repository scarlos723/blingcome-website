import React from 'react'
import girlImg from '@/images/buyNow/girl.png'
import stepper from '@/images/buyNow/stepper.png'
import { BoxImg, Grid, Section, TextBox } from './styles'
import starsImg from '@/images/aboutUs/stars.png'
export default function BannerBuyNow () {
  return (
    <Section>

      <Grid>
        <BoxImg>
          <img src={girlImg} alt="girl image" />
        </BoxImg>
        <TextBox>
          <h1>
            You’re almost ready to join us and become part of the <span>BLINGCOME</span> family!
          </h1>

          <img src={stepper} alt="stepper image" />

        </TextBox>
      </Grid>
      <img className='stars-img' src={starsImg} alt="stars image" />
    </Section>
  )
}
