import { Router } from 'express'
import passport from 'passport'

import baseLogger from '../logging'
import ensureUserAuthenticated from '../middleware/ensureUserAuthenticated'

const userRouter = Router()

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const { user } = req

  baseLogger.debug('Logged in user', user)

  res
    .status(200)
    .send(user)
    .end()
})

userRouter.post('/logout', (req, res) => {
  req.logout()

  baseLogger.debug('Logged out user')

  res
    .status(200)
    .send({ message: 'Logged out' })
    .end()
})

userRouter.get('/', ensureUserAuthenticated, (req, res) => {
  const { user } = req

  res
    .status(200)
    .send(user)
    .end()
})

export default userRouter
