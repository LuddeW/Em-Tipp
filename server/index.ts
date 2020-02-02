import express from 'express'

import forceSsl from './middleware/forceSsl'
import createClientRoute from './client-routing/createClientRoute'
import config from './config'
import initializeServerRoutes from './routes/initializeServerRoutes.ts'

const app = express()

if (config.forceSsl) {
  app.use(forceSsl)
}

app.disable('x-powered-by')

app.use(createClientRoute())

initializeServerRoutes(app)

app.listen(process.env.PORT || 4002, () => {})
