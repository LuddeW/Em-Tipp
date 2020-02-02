import express from 'express'
import request from 'request-promise'

const router = express.Router()
// npm config for handling variables?
const key = '****'

const secret = '****'

const uri = `https://livescore-api.com/api-client/scores/history.json?key=${key}&secret=${secret}`

export default function createMatchRoutes() {
  router.get('/', async (req, res) => {
    try {
      const options = {
        uri: uri,
        json: true
      }
      const result = await request(options)
      res.send(result)
    } catch (error) {
      // Log errors?
      res.status(400).send('something exploded')
    }
  })
  return router
}
