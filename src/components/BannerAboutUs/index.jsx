import React from 'react'
import { Grid } from './styles'
import banerImg from '@/images/home/bannerImg.png'
export default function BannerAboutUs () {
  return (
    <section className='custom-container'>
      <Grid>
        <div>
          <img src={banerImg} alt="" />
        </div>
        <div className='text-box'>
          <h1>
            About <br />
            Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
      </Grid>

    </section>
  )
}
