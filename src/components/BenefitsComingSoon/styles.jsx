import styled from "styled-components";
import { ResponsiveTo } from "@/hooks/UseResponsive";
import comingSoon from "@/images/benefits/coming-soon.png";
import starB from '@/images/tokenomics/starB.png'

export const Container = styled.div`
  display: flex;
  margin-bottom: -4rem;
  max-width: 1340px;
`

export const Image = styled.div`
  width: 50%;
  height: 876px;
  background-image: url(${comingSoon});
  background-repeat: no-repeat;
  z-index: -1;
`

export const Content = styled.div`
  width: 50%;
  justify-self: center;
  align-self: center;
`

export const StarImage = styled.img.attrs({src: starB, alt: 'Blingcome Logo'})`
  display: block;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-family: 'BigNoodleTitling';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 105%;
  text-align: center;
  text-transform: uppercase;
`
