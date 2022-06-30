import styled from 'styled-components'
import stars from '@/images/aboutUs/stars.png'
import disk from '@/images/aboutUs/disk.svg'

export const Background = styled.div`
  background: url(${stars}), url(${disk});
  background-size: auto;
  background-repeat: no-repeat;
  background-position-x: -220px, 140%;
  background-position-y: 480px, 86%;
`
