import React from 'react'
import Exchanges from '../../components/Exchanges'
import Forward from '../../components/Forward'
import ProposedTokenomics from '../../components/ProposedTokenomics'
import { Background } from './styles'

export default function Tokenomics () {
  return (
    <Background>
      <ProposedTokenomics />
      <Forward />
      <Exchanges />
    </Background>
  )
}
