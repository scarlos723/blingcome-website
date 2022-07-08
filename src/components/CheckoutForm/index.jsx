import React from 'react'
import CoinpaymentsButton from '../CoinpaymentsButton'
import { InputContainer } from '../ContactForm/styles'
import currencyOptions from './currencyOptions.json'
import { Error, Exchanges, Form } from './styles'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import getPaymentCheckoutSchema from './schema'
import Switch from '../Switch'

import conistore from '@/images/aboutUs/conistore.png'
import fmfw from '@/images/aboutUs/fmfw.png'
import uniswap from '@/images/aboutUs/uniswap.png'

export default function CheckoutForm () {
  const [currency, setCurrency] = React.useState(currencyOptions[0])
  const { register, watch, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(getPaymentCheckoutSchema({ currency }))
  })
  const watchTokenAmount = watch('tokenAmount')
  function handlerSwitch () {
    currency === currencyOptions[0]
      ? setCurrency(currencyOptions[1])
      : setCurrency(currencyOptions[0])
  }
  const total = (watchTokenAmount * currency.value).toFixed(2)

  function handlerCancelBtn (e) {
    e.preventDefault()
    window.alert('Cancel')
  }
  return (
    <div>
      <Form >
        <section className='col-section'>
          <div>
            <Switch
              options={currencyOptions}
              handleSwitch={handlerSwitch}
              currentValue={currency}
            />
          </div>
          <InputContainer>
            <label htmlFor="total-input" >
              <h4>Total <span>BLINGCOME</span> tokens</h4>
            </label>
            <input
              id='total-input'
              type="number"
              name='total'
              min='0'
              placeholder={`Min. tokens ${currency.minTokens}`}
              {...register('tokenAmount')}
            />
            {errors.tokenAmount && <Error role='alert'>{errors.tokenAmount.message}</Error>}
          </InputContainer>

          {
            total > 0 &&
              <div>
                <p>Payment Total</p>
                <p>{currency.prefix}{total}</p>
              </div>
          }
          <CoinpaymentsButton
            currency= {currency}
            watchTokenAmount = {watchTokenAmount}
            transactionToken = {''}
          />
          <Exchanges>
            <p>Set up your account to continue with the payment</p>
            <div className='grid-container'>
              <section> <img src={uniswap} alt="exchange image" /> </section>
              <section> <img src={fmfw} alt="exchange image" /> </section>
              <section> <img src={conistore} alt="exchange image" /> </section>
            </div>
          </Exchanges>
        </section>
        <section className='col-section'>
          <InputContainer>
            <label htmlFor="reference-input" >
              Reference
            </label>
            <textarea id='reference-input' type="text" name='reference' />
          </InputContainer>
          <button className='custom-btn-gray' onClick={handlerCancelBtn}>
            Cancel
          </button>
        </section>
      </Form>
    </div>
  )
}
