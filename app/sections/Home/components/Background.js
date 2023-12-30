import React from 'react'
import { Bubble } from './Bubble'

export const Background = () => {
  return (
    <div className='bubble-back absolute top-0 w-full h-full overflow-x-clip'>
      <div className='relative w-full h-full'>
        <Bubble position={{x: '-10vw', y: '30vh'}} direction={-1} intensityX={0.5}/>
        <Bubble position={{x: '60vw', y: '-10vh'}} intensityX={0.5} intensityY={0.5}/>
        <Bubble position={{x: '70vw', y: '70vh'}}/>
      </div>
    </div>
  )
}
