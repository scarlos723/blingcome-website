import React from 'react'
import BannerBenefits from '@/components/BannerBenefits'
import BlingcomeBenefits from '@/components/BlingcomeBenefits'
import ProposedUtility from '@/components/ProposedUtility'
import { Background, Separator } from './styles'
import BenefitsComingSoon from '../../components/BenefitsComingSoon'


function Benefits() {
  return (
    <>
      <BannerBenefits />
      <BlingcomeBenefits />
      <Separator />
      <Background>
        <ProposedUtility />
      </Background>
      <BenefitsComingSoon />
    </>
  )
}

export default Benefits