import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { CardsContainer } from './styles'
export default function ReelSection () {
  return (
    <div>
      <CardsContainer>
        <article><BsFillPlayFill color='white' size={41}/></article>
        <article><BsFillPlayFill color='white' size={41}/></article>
        <article><BsFillPlayFill color='white' size={41}/></article>
      </CardsContainer>
    </div>
  )
}
