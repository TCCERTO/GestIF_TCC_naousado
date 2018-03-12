import React, {Component} from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

import AuthService from '../utils/AuthService'
const Auth = new AuthService()

const Menu = [
  {
    text: 'Home',
    href: '/',
    icon: 'fa fa-th'
  },
  {
    text: 'Reports',
    href: '/reports',
    icon: 'fa fa-clipboard'
  },
  {
    text: 'Administração',
    icon: 'fa fa-cog',
    submenu: [
      {
        text: 'Usuários',
        href: '/usuarios',
        icon: 'fa fa-id-card'
      },
      {
        text: 'Config 2',
        href: '/config2',
        icon: 'fa fa-circle'
      }
    ]
  }
]

class Main extends Component {
  componentDidMount() {
    if (!Auth.loggedIn()) {
      Router.push('/login')
    }
  }
  render() {
    return (
      <div className="skin-black sidebar-mini wrapper">
        <Head />
        <Header auth={Auth} />
        <Sidebar menu={Menu} auth={Auth} />
        {this.props.children}
      </div>
    )
  }
}

export default Main