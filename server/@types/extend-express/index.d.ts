declare namespace Express {
  interface Request {
    user?: import('@em-tipp/common/types').User
    requestId?: string
  }
}
