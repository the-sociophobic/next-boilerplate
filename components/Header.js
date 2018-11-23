import { Component } from 'react';
import Link from 'next/link'

import Hamburger from './Hamburger'
import Phone from './Phone'
import Social from './Social'

import routes from '../utils/routes'

import '../static/sass/components/Header.sass'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false,
    }
  }
  render = () => {
    const Logo = <Link href="/">
      <button className="logo" />
    </Link>
    const LogoGrey = <Link href="/">
      <button className="logo grey" />
    </Link>

    const mappedRoutes = routes.map(route => 
      <Link href={route.link} key={route.link}>
        <button className="link">
          {route.name}
        </button>
      </Link>)

    return (
      <div>
        <header className="desktop">
          <div className="row">
            <div className="container relative">
              {Logo}
              <div className="nav-links">
              {mappedRoutes}
              </div>
              <Social links={["vk.com", "instagram.com"]}/>
            </div>
            <Phone number="+79217406762" />
          </div>
          <div className={"fixed-links " + (this.props.scrollY > 400 ? "shown" : "")}>
            <div className="container">
              {LogoGrey}
              {mappedRoutes}
              <Social links={["vk.com", "instagram.com"]}/>
              <Phone number="+79217406762" />
            </div>
          </div>
        </header>
        <header className="mobile">
          {Logo}
          <div className="column right">
            <Hamburger
              className="hamburger--slider"
              value={this.state.showMobileMenu}
              onClick={() => this.setState({showMobileMenu: !this.state.showMobileMenu})}
            />
            <Phone number="+79217406762" />
          </div>
        {
            !this.state.showMobileMenu ? "" :
              <div className="header-links">
                <div className="row">
                  {LogoGrey}
                </div>
                {mappedRoutes}
                <div className="social-row">
                  <Social links={["vk.com", "instagram.com"]}/>
                </div>
              </div>
          }
        </header>
      </div>
    )
  }
}

export default Header