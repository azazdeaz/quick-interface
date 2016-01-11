import React from 'react'
import {observer} from 'mobservable-react'
var {Label} = require('react-matterkit')

export default observer(({describe}) => {
  const settings = describe()
  return (
    <Label {...settings}/>
  )
})
