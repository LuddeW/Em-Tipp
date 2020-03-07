const { parse } = require('url')

const { Pool } = require('pg')

let pool = null as any

export function setup(databaseUrl: string) {
  const { hostname: host, port, auth, pathname } = parse(databaseUrl)
  const [user, password] = auth.split(':')
  const [, database] = pathname.split('/')

  const config = {
    user,
    password,
    host,
    port,
    database,
    ssl: true,
    max: 10
  }

  pool = new Pool(config)

  pool.on('error', (error: string) => {
    // eslint-disable-next-line no-console
    console.error('PostgreSQL pool error', error)
  })

  return Promise.resolve()
}

export async function run(query: string, values: any) {
  try {
    const result = (await pool.query(query, values)) as any
    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
