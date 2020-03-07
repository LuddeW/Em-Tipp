import { STATUS_CODES } from 'http'

import { Router } from 'express'

import userRouter from './userApi'

const apiRouter = Router()

apiRouter.use('/user', userRouter)

apiRouter.use((req, res) => {
  res
    .status(404)
    .send({ message: STATUS_CODES[404] })
    .end()
})

export default apiRouter
