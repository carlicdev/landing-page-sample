"use client"

import { useEffect, useState } from 'react'
import TimeUnit from './TimeUnit';
import { calculateTimeToEvent } from '../utils/countdown-utils';

const CountDownTimer = () => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateTimeToEvent())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div className='text-center flex gap-[25px]'>
        <TimeUnit 
            label="DÍAS"
            value={countdown.days}
        />
        <TimeUnit 
            label="HORAS"
            value={countdown.hours}
        />
        <TimeUnit 
            label="MINUTOS"
            value={countdown.minutes}
        />
        <TimeUnit 
            label="SEGUNDOS"
            value={countdown.seconds}
        />
    </div>
  )
}

export default CountDownTimer