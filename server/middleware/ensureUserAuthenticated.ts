import { STATUS_CODES } from 'http'

import { Request, Response, NextFunction } from 'express'

export default function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.isAuthenticated()) {
    response.status(401).end({ message: STATUS_CODES[401] })
  } else {
    next()
  }
}
