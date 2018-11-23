import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../../static/sass/components/AppearContainer.sass'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false,
    }
  }

  updateScroll() {
    if (this.state.shown)
      return
    let content = ReactDOM.findDOMNode(this)
    if (content instanceof HTMLElement) {
      content = content.getBoundingClientRect()
      if (true)
        this.setState({shown: true})
    }
  }

  componentDidMount() {
    this.updateScroll()
    window.addEventListener("scroll", this.updateScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScroll.bind(this))
  }

  render = () => (
    <div className={"AppearContainer " + (this.state.shown ? "shown" : "")}>
      {this.props.children}
    </div>
  )
}

export default Layout