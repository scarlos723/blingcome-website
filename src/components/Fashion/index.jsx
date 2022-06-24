import React from 'react'
import imgGirl from '@/images/home/imgFashion.png'
import imgGirlMb from '@/images/home/imgFashionMb.png'
import imgGirlMd from '@/images/home/imgFashionMd.png'
import textImg from '@/images/home/textImg.png'
import { Section } from './styles'
export default function Fashion () {
  return (
    <Section>
      <img className='girl' src={imgGirl} alt="" />
      <img className='girl-mb' src={imgGirlMb} alt="" />
      <img className='girl-md' src={imgGirlMd} alt="" />
      <img className='text' src={textImg} alt="" />
    </Section>
  )
}
