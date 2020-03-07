import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import expressSession from 'express-session'

import apiRouter from './api'
import createClientRoute from './client-routing/createClientRoute'
import config from './config'
import { setup } from './db/postgres'
import forceSsl from './middleware/forceSsl'
import { setupPassport } from './passport'

const app = express()

if (config.forceSsl) {
  app.use(forceSsl)
}

if (config.databaseUrl) {
  try {
    setup(config.databaseUrl)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

app.disable('x-powered-by')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  expressSession({
    name: 'em-tipp-session',
    secret: process.env.SESSION_SECRET || 'em-tipp-secret',
    resave: true,
    saveUninitialized: true
  })
)

setupPassport(app)

app.use('/api', apiRouter)

app.use(createClientRoute())

app.listen(process.env.PORT || 4002, () => {})
