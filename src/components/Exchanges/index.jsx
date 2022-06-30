import React from 'react'
// styles
import {
  Section,
  Title,
  SubTitle,
  ListingContainer,
  OurExchanges,
  BoxFutureExchanges
} from './styles'
import conistore from '@/images/aboutUs/conistore.png'
import fmfw from '@/images/aboutUs/fmfw.png'
import uniswap from '@/images/aboutUs/uniswap.png'

// Potential Exchanges /Images
import crypto from '@/images/aboutUs/crypto.png'
import binance from '@/images/aboutUs/binance.png'
import coinbase from '@/images/aboutUs/coinbase.png'
export default function Exchanges () {
  return (
    <section className='custom-container'>
      <Section>
        <Title>Exchanges</Title>
        <OurExchanges>
          <SubTitle>Our Exchanges </SubTitle>
          <ListingContainer>
            <a
              href='https://app.uniswap.org/#/swap?inputCurrency=0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8&chain=mainnet'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={uniswap} alt='Uniswap Logo' />
            </a>
            <a
              href='https://fmfw.io/fliks-to-usdt'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={fmfw} alt='Fmfw Logo' />
            </a>
            <a
              href='https://h5.coinstore.com/index'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={conistore} alt='Coinstore Logo' />
            </a>
          </ListingContainer>
        </OurExchanges>
        <BoxFutureExchanges>
          <SubTitle>Future Exchanges</SubTitle>
          <ListingContainer>
            <img src={crypto} alt='crypto.com logo' />
            <img src={coinbase} alt='coinbase logo' />
            <img src={binance} alt='binance logo' />
          </ListingContainer>
        </BoxFutureExchanges>
      </Section>
    </section>
  )
}
