import { Router } from 'express'
import passport from 'passport'

import ensureUserAuthenticated from '../middleware/ensureUserAuthenticated'

const userRouter = Router()

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const { user } = req

  res
    .status(200)
    .send(user)
    .end()
})

userRouter.post('/logout', (req, res) => {
  req.logout()
  res.status(200).end({ message: 'Logged out' })
})

userRouter.get('/', ensureUserAuthenticated, (req, res) => {
  const { user } = req

  res
    .status(200)
    .send(user)
    .end()
})

export default userRouter
