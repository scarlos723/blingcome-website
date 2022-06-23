import React from 'react'
import { ReactComponent as FacebookIcon } from '@/icons/footer/facebook.svg'
import { ReactComponent as TwitterIcon } from '@/icons/footer/twitter.svg'
import { ReactComponent as InstagramIcon } from '@/icons/footer/instagram.svg'
import { ReactComponent as DiscordIcon } from '@/icons/footer/discord.svg'
import { ReactComponent as TiktokIcon } from '@/icons/footer/tiktok.svg'
import { Section } from './styles'

export default function SocialBar () {
  return (
    <Section>
      <TwitterIcon />
      <InstagramIcon />
      <DiscordIcon />
      <FacebookIcon />
      <TiktokIcon />
    </Section>
  )
}
