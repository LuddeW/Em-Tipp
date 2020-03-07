import { Express } from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

async function tryAuthenticateUser(username: string, pin: string) {
  return { id: -1 }
}

async function getUserById(id: string) {
  return { id }
}

export function setupPassport(app: Express) {
  passport.use(
    new LocalStrategy(async (username, pin, done) => {
      let user

      try {
        await tryAuthenticateUser(username, pin)
      } catch (error) {
        return done(error)
      }

      if (!user) {
        return done(null, false, { message: 'Invalid username or pin' })
      }

      done(null, user)
    })
  )

  passport.serializeUser<any, any>((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser<any, any>(async (id, done) => {
    let user

    try {
      user = await getUserById(id)
    } catch (error) {
      return done(error)
    }

    done(null, user)
  })

  app.use(passport.initialize())
  app.use(passport.session())
}
