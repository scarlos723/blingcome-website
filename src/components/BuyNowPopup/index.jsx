import React from 'react'
import { Navigate } from 'react-router-dom'
import { Article, Contain, Container } from './styles'
import logo from '@/images/buyNowPopup/textLogo.png'
import { GrFormClose } from 'react-icons/gr'
export default function BuyNowPopup (props) {
  function handlerButton () {
    props.setShowPopup(false)
    Navigate('/buy-now-2')
  }
  return (
    <Container>
      <Contain>
        <GrFormClose size={32} onClick={() => props.setShowPopup(false)}/>
        <Article>
          <img src={logo} alt="Blingcome text logo" />
          <div>
            <h3>
              <span>Thank you</span> for interest in BLINGCOME
            </h3>
            <p>
            Please click on the following link to process <br /> your payment
            </p>
          </div>

          <button onClick={handlerButton} className='custom-btn'>
            click here
          </button>
        </Article>
      </Contain>
    </Container>
  )
}
