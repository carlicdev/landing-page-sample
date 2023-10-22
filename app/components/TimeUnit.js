import React from 'react'
import NumberRotation from './NumberRotation'

const TimeUnit = ({label, value}) => {
  return (
    <div className='flex flex-col'>
        <div className='text-green-500 text-5xl font-black text-center'>
            <NumberRotation number={value} />
        </div>
        <div className='text-center text-md font-medium text-white'>
            {label}
        </div>
    </div>
  )
}

export default TimeUnit