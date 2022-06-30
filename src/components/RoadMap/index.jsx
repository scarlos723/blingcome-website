import React from 'react'
import roadMapImg from '@/images/aboutUs/roadMap.png'
import { Contain } from './styles'
export default function RoadMap () {
  return (
    <section className='custom-container'>
      <Contain>
        <h2>Road Map</h2>
        <img src={roadMapImg} alt="" />
      </Contain>
    </section>
  )
}
