import {Component} from 'react'
import Layout from '../components/Layout.js'
import Link from 'next/link'
import { db } from '../utils/utils'

class Index extends Component {
  static async getInitialProps() {
    const data = await db('SELECT * FROM THEATERS')
    const users = await db('SELECT * FROM users')
    return {
      shows: data,
      users: users
    }
  }
  
  render = () => (
    <Layout users={this.props.users}>
      <h5>Театры</h5>
      {/* <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul> */}
      {this.props.shows.length}
    </Layout>
  )
}

export default Index