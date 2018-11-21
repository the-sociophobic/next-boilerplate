import { Component } from 'react';
import * as THREE from 'three-full';

export default class SphereBillboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X: 0,
      Y: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));

    var HomeDiv
    if (window.innerWidth >= 1040)
      HomeDiv = document.getElementById("SphereCanvas");
    else
      HomeDiv = document.getElementById("SphereCanvas2");

    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(HomeDiv.clientWidth / -2, HomeDiv.clientWidth / 2, HomeDiv.clientHeight / -2, HomeDiv.clientHeight / 2, 1, 500);
    
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(HomeDiv.clientWidth, HomeDiv.clientHeight );
    HomeDiv.appendChild(renderer.domElement);
    
    var ICOscale = HomeDiv.clientWidth / 10;

    var Light0 = new THREE.PointLight(0xffffff, 1.5, HomeDiv.clientWidth * 10);
    let lk = ICOscale / 25
    Light0.position.set(-210 * lk, -210 * lk, -620 * lk);
    scene.add( Light0 );
    var light = new THREE.AmbientLight( 0xffffff );
    scene.add( light );

    var loader = new THREE.OBJLoader();
    var ico;
    loader.load(
      '../static/3d/ico.obj',
      function ( object ) {
        var texture = new THREE.TextureLoader().load( "../static/3d/rainbow.jpg" );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, -1 );
        var ICOmaterial = new THREE.MeshStandardMaterial({ map: texture })
        ico = object.children[0];
        ico.scale.set(ICOscale, ICOscale, ICOscale)
        ico.material = ICOmaterial
        scene.add(ico)
      },
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      function ( error ) {
        console.log( 'An error happened' );
      }
    );


    camera.position.set( 0, 0, 10 );
    camera.lookAt( 0, 0, 0 );

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      if (typeof ico != "undefined")
        ico.rotation.y += 0.005;
    }
    animate();
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
        {/* <img
          src='../static/img/sphere.png'
          alt="Sphere.png"
          className="Sphere"
          style={{
            left: ((30 - (this.state.X / 1920 - .5) * 5) + "%"),
            top: ((10 - (this.state.Y / 1080 - .5) * 5) + "%"),
          }} /> */}
        <div
          id="SphereCanvas"
          style={{
            left: ((30 - (this.state.X / 1920 - .5) * 5) + "%"),
            top: ((10 - (this.state.Y / 1080 - .5) * 5) + "%"),
        }} />
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
        <div id="SphereCanvas2" />
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