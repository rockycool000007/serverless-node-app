const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from express')
})

app.get('/current', (request, response) => {
  response.send('This is current value')
})

app.get('/delete', (request, response) => {
  response.send('This is deleted')
})

app.get('/next', (request, response) => {
  response.send('This is next')
})

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is flying on port ${port}`)
})

module.exports = app
