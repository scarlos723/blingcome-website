import React from 'react'
import Exchanges from '../../components/Exchanges'
import Forward from '../../components/Forward'
import Proposed from '../../components/Proposed'
import { Background } from './styles'

export default function Tokenomics () {
  return (
    <Background>
      <Proposed />
      <Forward />
      <Exchanges />
    </Background>
  )
}
