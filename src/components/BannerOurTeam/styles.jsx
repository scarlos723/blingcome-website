import styled from "styled-components";
import { ResponsiveTo } from "@/hooks/UseResponsive";
import { Image, ImageBox, Title } from '../BannerBenefits/styles'

import bannerImg from "@/images/ourTeam/banner.png";

export const Container = styled.section`
  width: 100%;
  height: 480px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 9rem;
  align-items: center;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-position-x: 115%;
`

export const TextBox = styled.div`
  justify-self: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.5rem;
  max-width: 285px;
  align-content: center;
`

const TeamImageBox = styled(ImageBox)`
 justify-self: right;
`

export { TeamImageBox, Image, Title };