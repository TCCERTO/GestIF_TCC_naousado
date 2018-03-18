import React, { Component } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const auth = this.props
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <span className="logo-mini">
            <b>G</b>IF
          </span>
          <span className="logo-lg">
            <b>Gest</b>IF
          </span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <i className="fa fa-bars" />
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
            <Dropdown isOpen={this.state.dropdownOpen} tag="li" toggle={this.toggle} className="dropdown user user-menu">
              
              <DropdownToggle tag="a" href="#" className="dropdown-toggle">
                  <img
                    src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e805aec4d5c1c0cf7ceafbe714902428673f1e5d_full.jpg"
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">Henrick Mello</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu">
                
                  <div className="user-header">
                    <img
                      src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e805aec4d5c1c0cf7ceafbe714902428673f1e5d_full.jpg"
                      className="img-circle"
                      alt="User Image"
                    />
                    <p>
                      Henrick Mello
                      <small>Monitor</small>
                    </p>
                  </div>
                  <div className="user-footer">
                    <div className="pull-right">
                      <a
                        href="#"
                        onClick={() => auth.logout()}
                        className="btn btn-default btn-flat"
                      >
                        Sair
                      </a>
                    </div>
                  </div>
                
                </DropdownMenu>
              
              </Dropdown>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
