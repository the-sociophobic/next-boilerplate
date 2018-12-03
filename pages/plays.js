import {Component} from 'react'
import Layout from '../components/Layout.js'
import Link from 'next/link'
import { db } from '../utils/utils'

class Index extends Component {
  static async getInitialProps() {
    const users = await db('SELECT * FROM users')
    return {
      users: users
    }
  }
  
  render = () => (
    <Layout users={this.props.users}>
      <h5>Постановки</h5>
    </Layout>
  )
}

export default Index