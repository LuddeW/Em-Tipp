import { Request, Response, NextFunction } from 'express'
import uuid from 'uuid'

import { createScopedLogger } from '../logging'

const logger = createScopedLogger(__filename)

export default function addRequestId(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // const requestId = uuid.v1()

  // logger.debug('Adding requestId to request', {
  //   _request: {
  //     url: request.url,
  //     method: request.method,
  //     headers: request.rawHeaders
  //   },
  //   requestId
  // })

  // const requestAsAny = request as any // Temporary because ts-node can't find type in global.d.ts
  // requestAsAny.requestId = requestId

  next()
}
