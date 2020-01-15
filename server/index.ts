import express from 'express'

import forceSsl from './middleware/forceSsl'
import createClientRoute from './client-routing/createClientRoute'
import config from './config'

const app = express()

if (config.forceSsl) {
  app.use(forceSsl)
}

app.disable('x-powered-by')

app.use(createClientRoute())

app.listen(process.env.PORT || 4002, () => {})
