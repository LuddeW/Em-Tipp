import { URL } from 'url'

import { Pool, PoolConfig } from 'pg'

import baseLogger from '../logging'

let pool: Pool

export function setup(databaseUrl: string) {
  const parsedUrl = new URL(databaseUrl)

  const [, database] = parsedUrl.pathname.split('/')

  const config: PoolConfig = {
    database,
    user: parsedUrl.username,
    password: parsedUrl.password,
    host: parsedUrl.hostname,
    port: parseInt(parsedUrl.port, 10),
    ssl: {
      rejectUnauthorized: false
    },
    max: 10
  }

  pool = new Pool(config)

  pool.on('error', error => {
    baseLogger.error('PostgreSQL pool error', error)
  })
}

export async function run(query: string, values: string[]) {
  try {
    const result = await pool.query(query, values)
    return result
  } catch (error) {
    baseLogger.error('postgres.run', { query, error })
  }
}

export async function get<T = any, V extends any[] = any[]>(
  query: string,
  values: V
): Promise<T | undefined> {
  return pool.query<T, V>(query, values).then(({ rows }) => rows[0])
}

export async function update<V extends any[] = any[]>(
  query: string,
  values: V
) {
  return pool.query<any, V>(query, values).then(({ rowCount }) => rowCount)
}

export async function all<T = any, V extends any[] = any[]>(
  query: string,
  values: V
) {
  return pool.query<T, V>(query, values).then(({ rows }) => rows)
}

export function insert<V extends any[] = any[]>(
  tableName: string,
  columns: string[],
  values: V
) {
  const queryColumns = columns.join(', ')
  const queryValues = columns.map((_, index) => `$${index + 1}`).join(', ')

  const query = `INSERT INTO ${tableName} (${queryColumns}) VALUES (${queryValues}) RETURNING id`

  return pool
    .query<{ id: number }, V>(query, values)
    .then(({ rows }) => rows[0].id)
}
