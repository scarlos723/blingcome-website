import { useState } from 'react'

export const useCountdown = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval

  const startTimer = () => {
    const countDownDate = new Date('Jun 27,2022, 08:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(
          days < 10 ? `0${days}` : `${days}`
        )
        setTimerHours(
          hours < 10 ? `0${hours}` : `${hours}`
        )
        setTimerMinutes(
          minutes < 10 ? `0${minutes}` : `${minutes}`
        )
        setTimerSeconds(
          seconds < 10 ? `0${seconds}` : `${seconds}`
        )
      }
    })
  }
  return ([
    {
      days: timerDays,
      hours: timerHours,
      minutes: timerMinutes,
      seconds: timerSeconds
    },
    startTimer]
  )
}
