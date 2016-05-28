import React from 'react'
import {afflatus} from 'afflatus'
import Label from './Label'
import Input from './Input'
import Button from './Button'
//import DndWrap from './DndWrap'
import ContextMenuWrap from './ContextMenuWrap'
import {Icon, getTheme} from 'react-matterkit'
import shouldPureComponentUpdate from 'react-pure-render/function'

@afflatus
export default class Row extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate

  static contextTypes = {
    matterkitTheme: React.PropTypes.object
  }

  render() {
    const {
      describe,
      hoverState,
      openState,
      hasChildren,
      onHover,
      onLeave,
      onClickOpenToggle,
    } = this.props

    const {
      Component,
      highlighted,
      contextMenu,
      draggable,
      onClick,
      items,
      hideLeftToggle,
    } = describe()

    if (Component) {
      return <Component {...this.props}/>
    }

    var styleConfig = getTheme(this).getStyle('config')
    var textColor = highlighted ? styleConfig.palette.grey4 : styleConfig.fontColor.normal

    var styleBlock = {
      position: 'relative',
      height: styleConfig.lineHeight,
      lineHeight: `${styleConfig.lineHeight}px`,
      display: 'flex',
      color: highlighted ? styleConfig.palette.blue : styleConfig.palette.grey2,
      fontSize: '13px',
      backgroundColor: highlighted ? styleConfig.palette.blue : styleConfig.palette.bg,
      borderBottom: 'solid 1px #1a1d21',
      boxSizing: 'border-box',
    }

    function renderItem(item, key) {
      switch(item.type) {
        case 'button':
        return (
          <Button
            key={key}
            hover = {hoverState}
            style = {{...item.style, color: textColor}}
            describe = {item.describe}/>
        )
        case 'input':
        return (
          <Input
            key={key}
            style = {{...item.style}}
            describe = {item.describe}/>
        )
        case 'label':
        return (
          <Label
            key={key}
            style = {{...item.style, color: textColor}}
            describe = {item.describe}/>
        )
      }
    }


      // <DndWrap
      //   style={styleBlock}
      //   onMouseEnter={onHover}
      //   onMouseLeave={onLeave}
      //   onClick={()=>{
      //     if (onClick) {
      //       onClick()
      //     }
      //   }}
      //   draggable = {draggable}>}
      // </DndWrap>
    return <ContextMenuWrap options={contextMenu}>
        <div style={styleBlock} onClick={onClick}>

          {hideLeftToggle
            ? null
            : (
              <Icon
                icon={hasChildren ? (openState ? 'chevron-down' : 'chevron-right') : ' '}
                onClick={hasChildren ? onClickOpenToggle : null}
                style={{margin: '0 4px', color: textColor}}
              />
            )
          }

          {items.map((item, idx) => renderItem(item, idx))}

        </div>
    </ContextMenuWrap>
  }
}
