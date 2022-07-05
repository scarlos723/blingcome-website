import styled from "styled-components";
import {ReactComponent as SeparatorSvg} from "@/images/benefits/separator.svg";
import disk from '@/images/aboutUs/disk.svg'
import { ResponsiveTo } from "@/hooks/UseResponsive";

export const Background = styled.div`
  background: url(${disk});
  background-size: auto;
  background-repeat: no-repeat;
  background-position-x: 150%, 140%;
  background-position-y: 0, 86%;
`

export const Separator = styled(SeparatorSvg)`
  display: none;
  ${ResponsiveTo('md')} {
    width: 100%;
    max-width: 868px;
    margin: 0 auto;
    display: block;
  }
`

