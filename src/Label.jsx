import React from 'react'
import {afflatus} from 'afflatus'
var {Label} = require('react-matterkit')

export default afflatus(({describe}) => {
  const settings = describe()
  return (
    <Label {...settings}/>
  )
})
