import React, { PropTypes } from 'react'
import Row from './Row'
import Children from './Children'
import {afflatus} from 'afflatus'

@afflatus
class QuickInterface extends React.Component {
  static propTypes = {
    describe: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      open: true,
    }
  }

  handleClickOpenToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleHover = () =>
    this.setState({hover: true})

  handleLeave = () =>
    this.setState({hover: false})

  render () {
    const {
      describeRow,
      describeChildren,
      open,
      onToggleOpen,
      hidden,
      Component
    } = this.props.describe()

    if (Component) {
      return <Component {...this.props}/>
    }

    const showChildren = open !== undefined ? open : this.state.open

    const row = describeRow
      ? <Row
          describe = {describeRow}
          openState = {showChildren}
          hoverState = {this.state.hover}
          hasChildren = {!!describeChildren}
          onHover = {this.handleHover}
          onLeave = {this.handleLeave}
          onClickOpenToggle = {onToggleOpen || this.handleClickOpenToggle}/>
      : null

    const children = showChildren && describeChildren
      ? <Children
          style = {{marginLeft: 4}}
          describe = {describeChildren}/>
      : null

    return <div
      hidden = {hidden}
      style = {{position: 'relative'}}>
      {row}
      {children}
    </div>
  }
}

export default QuickInterface
