import { Component } from 'react';
import Link from 'next/link'

import Hamburger from './Hamburger'

import '../static/sass/components/Header.sass'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false,
    }
  }
  render = () => {
    return (
      <div>
        <header className="desktop">
        </header>
        <header className="mobile">
          <div className="row">
            <Hamburger
              className="hamburger--slider"
              value={this.state.showMobileMenu}
              onClick={() => this.setState({showMobileMenu: !this.state.showMobileMenu})}
            />
          </div>
        </header>
      </div>
    )
  }
}

export default Header