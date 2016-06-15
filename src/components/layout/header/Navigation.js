import React from 'react'

import Item from './Item'

export default class HeaderNavigation extends React.Component {


  render() {
    return(
      <div className={"yamm navbar-left navbar-collapse collapse" + ((this.props.mobile && this.props.collapsed) || (!this.props.mobile) ? ' in' : '')}>
        <ul className="nav navbar-nav">
          <Item content="Test Item"/>
        </ul>
      </div>
    )
  }
}