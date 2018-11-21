import '../static/sass/components/Hamburger.sass'

export default (props) => (
  <div
    className={'hamburger ' + props.className + ' ' + (props.value ? 'is-active' : '')}
    onClick={() => props.onClick()}
  >
    <div className='hamburger-box'>
      <div className='hamburger-inner' />
    </div>
  </div>
)