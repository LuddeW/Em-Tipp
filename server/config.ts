import { join } from 'path'

import dotenv from 'dotenv-flow'

dotenv.config()

const { env } = process

export default {
  port: env.PORT || 4002,
  forceSsl: env.FORCE_SSL === 'true',
  clientDistFolder: join(__dirname, '../client/dist'),
  databaseUrl: env.DATABASE_URL,
  logLevel: env.LOG_LEVEL || 'info'
}
