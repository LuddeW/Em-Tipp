import express from 'express'

import createClientRoute from './client-routing/createClientRoute'
import config from './config'
import { setup } from './db/postgres'
import forceSsl from './middleware/forceSsl'

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

app.use(createClientRoute())

app.listen(process.env.PORT || 4002, () => {})
