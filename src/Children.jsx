import React from 'react'
import {afflatus} from 'afflatus'

export default afflatus(({describe, style}) => {
  const children = describe()
  return (
    <div style={style}>
      {children}
    </div>
  )
})
