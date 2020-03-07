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

export async function run(query: string, values: string) {
  try {
    const result = (await pool.query(query, values)) as any
    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export async function get(query: string, values: string[]) {
  return pool.query(query, values).then(({ rows }: any) => rows[0])
}

export async function update(query: string, values: string[]) {
  return pool.query(query, values).then(({ rowCount }: any) => rowCount)
}

export async function all(query: string, values: string[]) {
  return pool.query(query, values).then(({ rows }: any) => rows)
}

export function insert(tableName: string, columns: string[], values: string[]) {
  const queryColumns = columns.join(', ')
  const queryValues = columns.map((_, index) => `$${index + 1}`).join(', ')

  const query = `INSERT INTO ${tableName} (${queryColumns}) VALUES (${queryValues}) RETURNING id`

  return pool.query(query, values).then(({ rows }: any) => rows[0].id)
}
