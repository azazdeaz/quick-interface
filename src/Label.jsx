import React from 'react'
import {afflatus} from 'afflatus'
var {MLabel} = require('react-matterkit')

@afflatus
export default class Label extends React.Component {
  render() {
    const {describe} = this.props
    const settings = describe()

    return (
      <MLabel {...settings}/>
    )
  }
}
