import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarCollapse = this.sidebarCollapse.bind(this)
    this.resize = this.resize.bind(this)
    this.collapse = this.collapse.bind(this)
  }

  componentWillMount() {
    this.setState({
      collapsed: false,
      mobile: false
    });
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  resize() {
    if(window.innerWidth < 768) {
      this.setState({mobile: true})
    }else{
      this.setState({mobile: false})
    }
  }

  collapse() {
    console.log('putin')
    this.setState({collapsed: !this.state.collapsed})
  }

  sidebarCollapse() {
    if(document.getElementsByTagName("body")[0].className.match(/sidebar-collapsed/)) {
      document.body.classList.remove('sidebar-collapsed');
    }else{
      document.body.classList.add('sidebar-collapsed');
    }
  }

  render() {
    return(
<header id="topnav" className={"navbar navbar-fixed-top clearfix " + (this.props.color ? 'navbar-'+this.props.color : 'navbar-default')} role="banner">

        <span id="trigger-sidebar" className="toolbar-trigger toolbar-icon-bg">
          <a onClick={() => {this.sidebarCollapse()} } data-toggle="tooltips" data-placement="right" title="Toggle Sidebar"><span className="icon-bg"><i className="fa fa-fw fa-bars"></i></span></a>
        </span>

        <a className="navbar-brand" href="index.html">Хуяк-хуяк и в продакшн</a>

        <ul className="nav navbar-nav toolbar pull-right" style={{paddingRight: '10px'}}>
          <li className="toolbar-icon-bg" style={{display: (this.state.mobile ? 'block' : 'none')}} onClick={() => this.collapse()}><a><span className="icon-bg"><i className="fa fa-fw fa-ellipsis-h"></i></span></a></li>
          <li className="dropdown toolbar-icon-bg">
            <a href="index.html#" className="hasnotifications dropdown-toggle" data-toggle='dropdown'><span className="icon-bg"><i className="fa fa-fw fa-bell"></i></span><span className="badge badge-info">5</span></a>
            <div className="dropdown-menu dropdown-alternate notifications arrow">
              <div className="dd-header">
                <span>Notifications</span>
                <span><a href="index.html#">Settings</a></span>
              </div>
              <div className="scrollthis scroll-pane">
                <ul className="scroll-content">

                  <li className="">
                    <a href="index.html#" className="notification-info">
                      <div className="notification-icon"><i className="fa fa-user fa-fw"></i></div>
                      <div className="notification-content">Profile Page has been updated</div>
                      <div className="notification-time">2m</div>
                    </a>
                  </li>
                  <li className="">
                    <a href="index.html#" className="notification-success">
                      <div className="notification-icon"><i className="fa fa-check fa-fw"></i></div>
                      <div className="notification-content">Updates pushed successfully</div>
                      <div className="notification-time">12m</div>
                    </a>
                  </li>
                  <li className="">
                    <a href="index.html#" className="notification-primary">
                      <div className="notification-icon"><i className="fa fa-users fa-fw"></i></div>
                      <div className="notification-content">New users request to join</div>
                      <div className="notification-time">35m</div>
                    </a>
                  </li>
                  <li className="">
                    <a href="index.html#" className="notification-danger">
                      <div className="notification-icon"><i className="fa fa-shopping-cart fa-fw"></i></div>
                      <div className="notification-content">More orders are pending</div>
                      <div className="notification-time">11h</div>
                    </a>
                  </li>
                  <li className="">
                    <a href="index.html#" className="notification-primary">
                      <div className="notification-icon"><i className="fa fa-arrow-up fa-fw"></i></div>
                      <div className="notification-content">Pending Membership approval</div>
                      <div className="notification-time">2d</div>
                    </a>
                  </li>
                  <li className="">
                    <a href="index.html#" className="notification-info">
                      <div className="notification-icon"><i className="fa fa-check fa-fw"></i></div>
                      <div className="notification-content">Succesfully updated to version 1.0.1</div>
                      <div className="notification-time">40m</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dd-footer">
                <a href="index.html#">View all notifications</a>
              </div>
            </div>
          </li>
        </ul>

        <div className={"yamm navbar-left navbar-collapse collapse" + ((this.state.mobile && this.state.collapsed) || (!this.state.mobile) ? ' in' : '')}>
          <ul className="nav navbar-nav">
            <li><a href="" target="_blank">Панель о хуйне</a></li>
            <li><a href="" target="_blank">Панель о другой хуйне</a></li>
          </ul>
        </div>

      </header>)
  }
}
