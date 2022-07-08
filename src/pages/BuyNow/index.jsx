import React from 'react'
import BannerBuyNow from '../../components/BannerBuyNow'
import { Background, ExchangesSection, FormSection, Grid, OrSection } from './styles'
import conistore from '@/images/aboutUs/conistore.png'
import fmfw from '@/images/aboutUs/fmfw.png'
import uniswap from '@/images/aboutUs/uniswap.png'
import ContactForm from '../../components/ContactForm'
import BuyNowPopup from '../../components/BuyNowPopup'
export default function BuyNow () {
  const [showPopup, setShowPopup] = React.useState(false)
  return (
    <Background>
      {
        showPopup &&
        <BuyNowPopup {...{ setShowPopup }} />
      }
      <BannerBuyNow />
      <ExchangesSection>
        <h3>
        make your payment using our <span>allowed</span> Exchanges
        </h3>
        <Grid>
          <section> <img src={uniswap} alt="exchange image" /> </section>
          <section> <img src={fmfw} alt="exchange image" /> </section>
          <section> <img src={conistore} alt="exchange image" /> </section>
        </Grid>
        <OrSection>
          <hr />
          <p><span>or</span></p>
          <hr />
        </OrSection>
        <FormSection>
          <h3>you can Fill the <span>required</span> fields</h3>
          <ContactForm {...{ setShowPopup }}/>
        </FormSection>
      </ExchangesSection>
    </Background>
  )
}
