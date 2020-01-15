import { join } from 'path'

const { env } = process

export default {
  forceSsl: env.FORCE_SSL === 'true',
  clientDistFolder: join(__dirname, '../client/dist')
}
