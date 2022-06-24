import React from 'react'

import BImg from '@/images/home/bannerImg.png'
import { ReactComponent as LipsIcon } from '@/icons/home/lipstick.svg'
import { ReactComponent as WalletIcon } from '@/icons/home/wallet.svg'
import { ReactComponent as BagIcon } from '@/icons/home/bag.svg'
import { Grid, ImgSection, MenuSection, TextSection } from './styles'
export default function BannerHome () {
  return (
    <Grid>
      <ImgSection>
        <img src={BImg} alt="banner image" />
      </ImgSection>
      <TextSection>
        <div className='icons-container'>
          <BagIcon />
          <LipsIcon />
          <WalletIcon />
        </div>
        <h1>
        Blingcome is making fashion better.
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <button className='custom-btn'>Register</button>
      </TextSection>
      <MenuSection>
        <ul>
          <li>
          This is Blingcome
          </li>
          <li>
          Fashion
          </li>
          <li>
          Coming soon
          </li>
          <li>
            Register
          </li>
        </ul>
      </MenuSection>
    </Grid>
  )
}
