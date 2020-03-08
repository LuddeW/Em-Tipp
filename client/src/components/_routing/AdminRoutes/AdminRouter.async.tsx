import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import AdminRoot from '../../../pages/_admin/AdminRoot'

interface AdminRouterAsyncProps {}

export default function AdminRouterAsync() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={path} exact>
        <AdminRoot />
      </Route>
    </Switch>
  )
}
