declare namespace Express {
  export interface User {
    id: string
    username: string
    displayname: string
    isAdmin?: boolean
  }

  export interface Request {
    requestId?: string
  }
}
