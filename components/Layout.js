import React, { Component } from 'react';

import Head from './Head'
import Header from './Header'
import Footer from './Footer'

import {getPlatform} from './../utils/utils'

import "../static/sass/main.sass"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      W: 0,
      H: 0,
      scrollX: 0,
      scrollY: 0,
      platform: "Web",
    }
  }

  updateDimensions() {
    this.setState({
      W: window.innerWidth,
      H: window.innerHeight,
    })
  }

  updateScroll() {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  }

  componentDidMount() {
    this.updateDimensions()
    this.setState({platform: getPlatform()})
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("deviceorientation", this.updateDimensions.bind(this))
    window.addEventListener("scroll", this.updateScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
    window.removeEventListener("deviceorientation", this.updateDimensions.bind(this))
    window.removeEventListener("scroll", this.updateScroll.bind(this))
  }

  render = () => (
    <div className="App">
      <Head title="React isomorphic App" />
      <Header {...this.state} users={this.props.users} />
      <main>
        <div className="container">
          {this.props.children}
        </div>
      </main>
      <Footer {...this.state} />
    </div>
  )
}

export default Layout