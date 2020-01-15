import express from 'express'

const app = express()

app.get('/hello-world', (request, response) => {
  response.send('Hello world')
})

app.listen(process.env.PORT || 4002, () => {})
