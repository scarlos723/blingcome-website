import React from 'react'
import SocialBar from '../SocialBar'
import { FooterContainer, Contain, TextGrid } from './styles'

export default function Footer () {
  return (
    <FooterContainer>
      <Contain>
        <div>
          <SocialBar />
        </div>
        <TextGrid>
          <li>
            Powered by DarkHorse Studios LTD
          </li>
          <li>
            Copyright © 2021 Blingcome - All Rights Reserved
          </li>
          <li>
            PRIVACY POLICY
          </li>
        </TextGrid>
      </Contain>
    </FooterContainer>
  )
}
