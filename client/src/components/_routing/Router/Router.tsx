import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SettingsPage from '../../../pages/_authenticated/SettingsPage'
import NotFound from '../../../pages/_error/NotFound'
import WelcomePage from '../../../pages/WelcomePage'
import AuthenticatedRoute from '../AuthenticatedRoute'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>

        <AuthenticatedRoute path="/settings">
          <SettingsPage />
        </AuthenticatedRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
