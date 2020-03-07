import { join } from 'path'

import dotenv from 'dotenv-flow'

dotenv.config()

const { env } = process

export default {
  forceSsl: env.FORCE_SSL === 'true',
  clientDistFolder: join(__dirname, '../client/dist'),
  databaseUrl: env.DATABASE_URL
}
