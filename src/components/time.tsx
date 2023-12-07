'use client'

import { useState, useEffect } from "react"

export function Time() {
  const [time, setTime] = useState('00:00')
  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date()
      const options = {
        timezone: 'Africa/Casablanca',
        hour12: true,
      }
      const timeInCasablanca = currentTime.toLocaleTimeString('en-US', options)
      const t = timeInCasablanca.split(':')[0] + ':'+ timeInCasablanca.split(':')[1] + ' ' + timeInCasablanca.split(' ')[1]
      setTime(t)
    }, 1000)
  }, [])
  return (
    <span className="p-1.5 text-sm rounded-xl border select-none">{time}</span>
  )
}
