const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from express')
})

app.get('/test', (request, response) => {
  response.send('This is test page')
})

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is flying on port ${port}`)
})

module.exports = app
