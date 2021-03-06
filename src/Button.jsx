import React from 'react'
import {afflatus} from 'afflatus'
import {Button} from 'react-matterkit'

export default afflatus(({describe, style, hover}) => {
  const settings = describe()

  let visibility = 'visible'
  let button

  if (settings.hideWhenLeaved && !hover) {
    visibility = 'hidden'
  }

  if (settings.getElement) {
    button = settings.getElement({style})
  }
  else {
    button = <Button
      {...settings}
      style = {{...settings.style, ...style}}
      mod = {{kind: 'stamp', ...settings.mod}}
      onClick = {settings.onClick}
    />
  }

  return <div style={{visibility}}>
    {button}
  </div>
})
