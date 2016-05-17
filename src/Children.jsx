import React from 'react'
import {afflatus} from 'afflatus'

@afflatus
export default class Children extends React.Component {
  render() {
    const {describe, style} = this.props
    const children = describe()

    return (
      <div style={style}>
        {children}
      </div>
    )
  }
}
