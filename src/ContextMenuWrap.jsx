import React from 'react'
import {ContextMenu} from 'react-matterkit'

export default class ContextMenuWrap extends React.Component {
  render() {
    const {options, children} = this.props

    if (!options) {
      return children
    }

    return <ContextMenu
      items = {options.items || []}
      renderComponent = {options.renderComponent}>
      {children}
    </ContextMenu>
  }
}
