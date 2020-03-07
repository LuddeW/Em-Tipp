import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from '../../../pages/LoginPage'
import WelcomePage from '../../../pages/WelcomePage'
import SettingsPage from '../../../pages/_authenticated/SettingsPage'
import NotFound from '../../../pages/_error/NotFound'
import AdminRoutes from '../AdminRoutes'
import AuthenticatedRoute from '../AuthenticatedRoute'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <AuthenticatedRoute path="/settings">
          <SettingsPage />
        </AuthenticatedRoute>

        <AdminRoutes path="/admin" />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
