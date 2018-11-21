import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout.js'
import SphereBillboard from '../components/SphereBillboard.js'

const Index = (props) => (
  <Layout>
    <SphereBillboard />
    {/* <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
    <article className="panel" />
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index