import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { getIsAuthenticated } from '../../../modules/authentication/authentication.selectors'
import FullPageLoader from '../../_loaders/FullPageLoader'

const AsyncAdminRoute = React.lazy(() => import('./AdminRouter.async'))

interface AdminRoutesProps {
  path: string
}

export default function AdminRoutes({ path }: AdminRoutesProps) {
  const isAuthenticated = useSelector(getIsAuthenticated)
  const isAdmin = true

  function onRouteRender() {
    if (!isAuthenticated || !isAdmin) {
      return <Redirect to="/" />
    }

    return (
      <Suspense fallback={<FullPageLoader />}>
        <AsyncAdminRoute />
      </Suspense>
    )
  }

  return <Route path={path} render={onRouteRender} />
}
