import React from 'react'
import BannerAboutUs from '../../components/BannerAboutUs'
import Exchanges from '../../components/Exchanges'
import IdoExchange from '../../components/IdoExchange'
import Participate from '../../components/Participate'
import RoadMap from '../../components/RoadMap'
import { Background } from './styles'

export default function AboutUs () {
  return (
    <Background>
      <BannerAboutUs />
      <RoadMap />
      <IdoExchange />
      <Participate />
      <Exchanges />
    </Background>
  )
}
