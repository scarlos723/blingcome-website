import React, { useEffect } from 'react'
import { Countdown, CountSection, Grid, IconSection } from './styles'
import iconBling from '../../icon.svg'
import { useCountdown } from '../../hooks/useCountDown'
import { ReactComponent as ClockIcon } from '@/icons/home/clock.svg'
export default function ComingSoon () {
  const [countdown, startTimer] = useCountdown()
  useEffect(() => {
    startTimer()
  }, [])
  return (
    <Grid>

      <IconSection>
        <div className='icon-clock'>
          <ClockIcon />
        </div>
        <img src={iconBling} alt="Icon Blingcome" />
        <h2>BLINGCOME <br /> is coming soon!</h2>
      </IconSection>
      <CountSection>
        <div className='icon-clock'>
          <ClockIcon />
        </div>
        <Countdown>
          <section>
            <h2>{countdown.days}</h2>
            <p>Days</p>
          </section>
          <h2>:</h2>
          <section>
            <h2>{countdown.hours}</h2>
            <p>Hours</p>
          </section>
          <h2>:</h2>
          <section>
            <h2>{countdown.minutes}</h2>
            <p>Minutes</p>
          </section>
          <h2>:</h2>
          <section>
            <h2>{countdown.seconds}</h2>
            <p>Seconds</p>
          </section>
        </Countdown>
        <div className='text-btn'>
          <p>Don’t waste time and register now</p>
          <button className='custom-btn'>Register</button>
        </div>

      </CountSection>
    </Grid>
  )
}
