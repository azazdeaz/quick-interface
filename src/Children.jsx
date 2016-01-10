var React = require('react')
import {observer} from 'mobservable-react'

export default observer(({describe, style}) => {
  const children = describe()
  return (
    <div style={style}>
      {children}
    </div>
  )
})
