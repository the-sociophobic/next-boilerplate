import { Component } from 'react';
import Link from 'next/link'

import SiteByLev from './SiteByLev'

import '../static/sass/components/Footer.sass'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="desktop">
          <div className="container">
            <SiteByLev />
          </div>
        </footer>
        <footer className="mobile">
          <div className="container">
            <SiteByLev />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;