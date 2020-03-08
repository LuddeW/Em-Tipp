import { User, UserId } from '@em-tipp/common/types'
import { Express } from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { authenticateUser, getUserById } from './db/models/users.query'

export function setupPassport(app: Express) {
  passport.use(
    new LocalStrategy(async (username, pin, done) => {
      let user = null

      try {
        user = await authenticateUser(username, pin)
      } catch (error) {
        return done(error)
      }

      if (!user) {
        return done(null, false, { message: 'Invalid username or pin' })
      }

      done(null, user)
    })
  )

  passport.serializeUser<User, UserId>((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser<User, UserId>(async (id, done) => {
    let user

    try {
      user = await getUserById(id)
    } catch (error) {
      return done(error)
    }

    if (!user) {
      return done(new Error(`Could not deserialize user with id="${id}"`))
    }

    done(null, user)
  })

  app.use(passport.initialize())
  app.use(passport.session())
}
