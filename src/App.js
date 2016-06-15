import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Sidebar  from './containers/Sidebar'
import Header   from './containers/Header'
import Main     from './containers/Main'

import * as LayoutActions from './actions/layout'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
  }

  componentWillMount() {
    this.setState({})
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  resize() {
    if(window.innerWidth < 768) {
      document.body.classList.add('sidebar-collapsed');
      document.body.classList.add('topnav-collapsed');
    }else{
      document.body.classList.remove('sidebar-collapsed');
      document.body.classList.remove('topnav-collapsed');
    }
  }

  render() {

    return (
          <div>
            <div>
            <Header color="default"/>
              <div id="wrapper">
                <div id="layout-static">
                  <Sidebar
                    color="inverse"
                    data={this.props}/>
                  <div className="static-content-wrapper">
                    <div className="static-content">
                      {!this.props.children && <Main />}
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
  }
}


function mapStateToProps(state) {
  return {
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, LayoutActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
