import React from 'react'
import BannerHome from '../../components/BannerHome'
import ComingSoon from '../../components/ComingSoon'
import DontGet from '../../components/DontGet'
import Fashion from '../../components/Fashion'
import ReelSection from '../../components/ReelSection'
import ThisIs from '../../components/ThisIs'

export default function Home () {
  return (
    <div>
      <BannerHome />
      <DontGet />
      <ReelSection />
      <ThisIs />
      <Fashion />
      <ComingSoon />
    </div>
  )
}
