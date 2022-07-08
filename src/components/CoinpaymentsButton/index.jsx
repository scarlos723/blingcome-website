import React from 'react'
import { BtnContainer } from './styles'

export default function CoinpaymentsButton (props) {
  const { transactionToken, currency, watchTokenAmount } = props
  return (
    <BtnContainer>
      <form action='https://www.coinpayments.net/index.php' method='post' target='_blank' style={{ width: '100%' }}>
        <input type='hidden' name='cmd' value='_pay' />
        <input type='hidden' name='reset' value='1' />
        <input type='hidden' name='merchant' value={import.meta.env.VITE_COINPAYMENTS_MERCHANT_ID || ''} />
        <input type='hidden' name='item_name' value='FilmCoin' />
        <input type='hidden' name='invoice' value={transactionToken || ''} />
        <input type='hidden' name='currency' value={currency.name} />
        <input type='hidden' name='amountf' value={currency.value} />
        <input type='hidden' name='quantity' value={watchTokenAmount} />
        <input type='hidden' name='allow_quantity' value='0' />
        <input type='hidden' name='want_shipping' value='0' />
        <input type='hidden' name='success_url' value='https://thefilmcoin.io/#/success' />
        <input type='hidden' name='allow_extra' value='0' />
        <input type='image' src='https://www.coinpayments.net/images/pub/buynow-wide-yellow.png' alt='Comprar ahora con CoinPayments.net' style={{ display: 'block', width: '100%' }} />
      </form>
    </BtnContainer>

  )
}
