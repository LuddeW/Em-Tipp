import { STATUS_CODES } from 'http'

import { Request, Response, NextFunction } from 'express'

export default function ensureIsAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.isAuthenticated() || !request.user?.admin) {
    response
      .status(401)
      .send({ message: STATUS_CODES[401] })
      .end()
  } else {
    next()
  }
}
