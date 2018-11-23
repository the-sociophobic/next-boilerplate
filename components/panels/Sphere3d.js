import { Component } from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three-full'

export default class SphereBillboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      ico: undefined,
    }
  }

  handleResize() {
    let {scene, camera, renderer} = this.state

    if (!(scene && camera && renderer))
      return

    let thisDiv = ReactDOM.findDOMNode(this)
    if (!thisDiv instanceof HTMLElement)
      return
    camera.aspect = thisDiv.clientWidth / thisDiv.clientWidth
    camera.updateProjectionMatrix()

    renderer.setSize(thisDiv.clientWidth, thisDiv.clientHeight)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))

    let thisDiv = ReactDOM.findDOMNode(this)
    if (!thisDiv instanceof HTMLElement)
      return

    var scene = new THREE.Scene()
    var camera = new THREE.OrthographicCamera(thisDiv.clientWidth / -2, thisDiv.clientWidth / 2, thisDiv.clientHeight / -2, thisDiv.clientHeight / 2, 1, 500)
    
    var renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(thisDiv.clientWidth, thisDiv.clientHeight)
    thisDiv.appendChild(renderer.domElement)
    
    var ICOscale = thisDiv.clientWidth / 10

    var Light0 = new THREE.PointLight(0xffffff, 1.5, thisDiv.clientWidth * 10)
    let lk = ICOscale / 25
    Light0.position.set(-210 * lk, -210 * lk, -620 * lk)
    scene.add( Light0 )
    var light = new THREE.AmbientLight( 0xffffff )
    scene.add( light )

    var loader = new THREE.OBJLoader()
    var ico
    loader.load('../static/3d/ico.obj',
      object => {
        var texture = new THREE.TextureLoader().load( "../static/3d/rainbow.jpg" )
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set( 1, -1 )
        var ICOmaterial = new THREE.MeshStandardMaterial({ map: texture })
        ico = object.children[0]
        ico.scale.set(ICOscale, ICOscale, ICOscale)
        ico.material = ICOmaterial
        scene.add(ico)
      },
      xhr => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      },
      error => {
        console.log('An error happened')
      }
    )
    
    // camera.position.set(0, 0, 10)
    // camera.lookAt(0, 0, 0)

    this.setState({
      scene: scene,
      camera: camera,
      renderer: renderer,
      ico: ico,
    })

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      if (typeof ico != "undefined")
        ico.rotation.y += 0.005
    }
    animate()
  }

  render = () => <div id="SphereCanvas" />
}