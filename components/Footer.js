import { Component } from 'react';
import Link from 'next/link'

import Social from './Social'
import SiteByLev from './SiteByLev'

import routes from '../utils/routes'
import '../static/sass/components/Footer.sass'

class Footer extends Component {
  render() {
    const mappedRoutes = routes.map(route => 
      <Link href={route.link} key={route.link}>
        <button>
          {route.name}
        </button>
      </Link>);

    return (
      <div>
        <footer className="desktop">
          <div className="container">
            <div className="half">
              <div className="half">
                <Link href="/">
                  <button className="logo grey" />
                </Link>
              </div>
              <div className="half">
                <div className="half">
                  {mappedRoutes.slice(0, Math.ceil(routes.length / 2))}
                </div>
                <div className="half">
                  {mappedRoutes.slice(Math.ceil(routes.length / 2))}
                </div>
              </div>
            </div>
            <div className="half">
              <div className="half">
                <div className="row">
                  Адрес
                </div>
                <SiteByLev />
              </div>
              <div className="half">
                телефон
                <Social links={["vk.com", "instagram.com"]}/>
              </div>
            </div>
          </div>
        </footer>
        <footer className="mobile">
          <div className="container">
            <Link href="/">
              <button className="logo grey" />
            </Link>
            <div className="row">
              <div className="half">
                {mappedRoutes.slice(0, Math.ceil(routes.length / 2))}
              </div>
              <div className="half">
                {mappedRoutes.slice(Math.ceil(routes.length / 2))}
              </div>
              <div className="row">
                Адрес
              </div>
              <SiteByLev />
              <Social links={["vk.com", "instagram.com"]}/>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;