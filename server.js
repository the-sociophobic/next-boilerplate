const express = require('express')
const next = require('next')
const mysql = require('mysql')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/db', (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'dermo123',
      database: 'test'
    })
    // console.log('connecting...')
    connection.connect(err => {
      if (err) throw err
      // console.log('connected')
    })
    connection.query(req.query.query, (error, results, fields) => {
      if (error) throw error
      res.setHeader('Content-Type', 'application/json')
      // console.log(results)
      res.send(results)
    })
    connection.end()
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})