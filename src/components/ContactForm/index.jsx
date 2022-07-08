import React from 'react'
import { ButtonContainer, Container, Form, InputContainer } from './styles'

export default function ContactForm (props) {
  const [formData, setFormData] = React.useState({
    mail: '',
    region: '',
    name: '',
    lastName: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    phoneNumber: ''
  })

  function handlerChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  function handlerCancel (e) {
    e.preventDefault()
    window.alert('cancel')
  }
  function handlerContinue (e) {
    e.preventDefault()
    props.setShowPopup(true)
  }
  return (

    <Container>
      <h5>Contact Information</h5>
      <Form onChange={handlerChange}>
        <div className='grid'>
          <section>
            <InputContainer>
              <label htmlFor="mail-input">Contact Mail <span>*</span></label>
              <input id='mail-input' type="text" name='mail' placeholder='Enter email address'/>
            </InputContainer>
            <InputContainer>
              <label htmlFor="region-input">Country/ Region <span>*</span></label>
              <input id='region-input' type="text" name='region' placeholder='England' />
            </InputContainer>
            <div className='grid-name'>
              <InputContainer>
                <label htmlFor="name-input">Name <span>*</span></label>
                <input id='name-input' type="text" name='name' placeholder='Enter Name'/>
              </InputContainer>
              <InputContainer>
                <label htmlFor="lastName-input">Last Name <span>*</span></label>
                <input id='lastName-input' type="text" name='lastName' placeholder='Enter Last Name'/>
              </InputContainer>
            </div>

          </section>
          <section>
            <InputContainer>
              <label htmlFor="address-input">Address <span>*</span></label>
              <input id='address-input' type="text" name='address' placeholder='Enter Address' />
            </InputContainer>
            <div className='grid-city'>
              <InputContainer>
                <label htmlFor="city-input"> City <span>*</span></label>
                <input id='city-input' type="text" name='city' />
              </InputContainer>
              <InputContainer>
                <label htmlFor="province-input"> Province <span>*</span></label>
                <input id='province-input' type="text" name='province' />
              </InputContainer>
              <InputContainer>
                <label htmlFor="zipCode-input"> Zip Code <span>*</span></label>
                <input id='zipCode-input' type="text" name='zipCode' />
              </InputContainer>
            </div>
            <InputContainer>
              <label htmlFor="phoneNumber-input"> Phone Number <span>*</span></label>
              <input id='phoneNumber-input' type="text" name='phoneNumber' />
            </InputContainer>
          </section>
        </div>
        <ButtonContainer>
          <button className='custom-btn-gray' onClick={handlerCancel}>Cancel</button>
          <button className='custom-btn' onClick={handlerContinue}> Continue To Payment</button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}
