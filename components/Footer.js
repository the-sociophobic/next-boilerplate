import { Component } from 'react';
import Link from 'next/link'
import { db } from '../utils/utils'

import SiteByLev from './SiteByLev'

import '../static/sass/components/Footer.sass'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="column right">
              <SiteByLev />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;