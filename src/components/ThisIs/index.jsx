import React from 'react'
import { ReactComponent as LipsIcon } from '@/icons/home/lipstick.svg'
import { ReactComponent as WalletIcon } from '@/icons/home/wallet.svg'
import { ReactComponent as BagIcon } from '@/icons/home/bag.svg'
import { Grid, TextSection } from './styles'
export default function ThisIs () {
  return (
    <Grid>
      <section className='title'>
        <h2>
        This is <br /> BLINGCOME
        </h2>
      </section>
      <div className='text-container'>

        <TextSection>
          <div>
            <BagIcon />
            <LipsIcon />
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum neque quas
          architecto fuga vitae, inventore quidem
          laboriosam ipsa cum ab quae eligendi enim
          fugiat cumque, molestiae blanditiis reiciendis repudiandae culpa.
          </p>
        </TextSection>
        <TextSection>
          <div>
            <WalletIcon />
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum neque quas
          architecto fuga vitae, inventore quidem
          laboriosam ipsa cum ab quae eligendi enim
          fugiat cumque, molestiae blanditiis reiciendis repudiandae culpa.
          </p>
        </TextSection>
      </div>
    </Grid>
  )
}
