import { Component } from 'react';

import Sphere3d from './Sphere3d';

export default class IndexPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X: 0,
      Y: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  handleMouseMove(event) {
    this.setState({
      X: event.clientX,
      Y: event.clientY,
    });
  }

  render = () => (
    <article className="panel sphere-billboard">
      <div className="desktop">
        <div
          className="Sphere-container"
          style={{
            left: ((30 - (this.state.X / 1920 - .5) * 5) + "%"),
            top: ((10 - (this.state.Y / 1080 - .5) * 5) + "%"),
        }}>
          {/* <img
            src='../static/img/sphere.png'
            alt="Sphere.png"
            className="Sphere"
          /> */}
          <Sphere3d />
        </div>
        <img
          src='../static/img/logo.svg'
          alt="Logo.png"
          className="big-logo"
          style={{
            left: ((25 - (this.state.X / 1920 - .5) * 12) + "%")
          }}
        />
        <div
          className="slogan"
          style={{
            left: ((15 - (this.state.X / 1920 - .5) * 8) + "%")
          }}
        >
          АВТОРСКИЙ ПОДХОД<br />К ПРОЕКТАМ
        </div>
      </div>
      <div className="mobile">
        <div
          className="Sphere-container"
          style={{
            left: ((30 - (this.state.X / 1920 - .5) * 5) + "%"),
            top: ((10 - (this.state.Y / 1080 - .5) * 5) + "%"),
        }}>
          {/* <img
            src='../static/img/sphere.png'
            alt="Sphere.png"
            className="Sphere"
          /> */}
          <Sphere3d />
        </div>
        <img
          src='../static/img/logo.svg'
          alt="Logo.png"
          className="big-logo"
        />
        <div
          className="slogan"
        >
          АВТОРСКИЙ ПОДХОД<br />К ПРОЕКТАМ
        </div>
      </div>
    </article>
  )
}