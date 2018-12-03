import { Component } from 'react';
import { connect } from 'react-redux'
import { changeUser, changeDate } from '../store'
import Link from 'next/link'
import routes from '../utils/routes'

import '../static/sass/components/Header.sass'

class Header extends Component {
  handleUser(event) {
    const {dispatch} = this.props
    dispatch(changeUser(event.target.value))
  }
  handleDate(event) {
    const {dispatch} = this.props
    dispatch(changeDate(event.target.value))
  }

  render = () => {
    return (
      <header>
        <div className="container">
          <div className="sixth left">
            <select value={this.props.currentUser} onChange={this.handleUser.bind(this)}>
              {this.props.users ?
                this.props.users.map(user =>
                  <option value={user.id}>{user.name} {user.surname}</option>
                ) : <option value={this.props.currentUser}>{this.props.currentUser}</option>
              }
            </select>
          </div>
          <div className="two-third left">
            <div className="column center">
              {routes.map(route => <Link href={route.link}>{route.name}</Link>)}
            </div>
          </div>
          <div className="sixth left">
            <input
              type="date"
              className="right"
              value={this.props.currentDate}
              onChange={this.handleDate.bind(this)}
            />
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const {currentUser, currentDate} = state
  return {
    currentUser: currentUser,
    currentDate: currentDate,
  }
}

export default connect(mapStateToProps)(Header)