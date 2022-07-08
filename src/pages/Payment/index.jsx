import React from 'react'
import CheckoutForm from '@/components/CheckoutForm'
import girlImg from '@/images/payment/girl.png'
import { Background, Banner } from './styles'
export default function Payment () {
  return (
    <Background>
      <section className='custom-container'>
        <Banner>
          <img src={girlImg} alt="" />
          <h1>
          You’re almost ready to join us and become part of the <span>BLINGCOME</span> family!
          </h1>
        </Banner>
      </section>
      <section style={{ marginTop: 100 }}>
        <CheckoutForm />
      </section>
    </Background>
  )
}
