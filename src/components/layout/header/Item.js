import React from 'react'

export default class HeaderNavigationItem extends React.Component {
  render() {
    return (<li><a>{this.props.content ? this.props.content : 'LINK'}</a></li>)
  }
}