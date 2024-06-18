import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react'

export const ImgPlaceholder = (props) => {
  const [loaded, setLoaded] = useState();
  const {noImage, ...newProps} = props;

  return (
    <div className={`w-full h-full ${!loaded ? 'animate-pulse' : ''}`} style={loaded ? {backdropFilter: 'none', background: 'none'} : {background: '#adad9f'}}>
      {!props.noImage && 
        <CldImage 
          alt='' 
          {...newProps} 
          onLoad={() => setLoaded(true)} 
          style={{transition: 'ease-in-out 1s', opacity: loaded ? 1 : 0}}
        />}
    </div>
  )
}
