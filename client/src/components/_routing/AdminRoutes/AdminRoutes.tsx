import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

import {
  getIsAuthenticated,
  getIsAdminUser
} from '../../../modules/authentication/authentication.selectors'
import Unathorized from '../../../pages/_error/Unathorized'
import FullPageLoader from '../../_loaders/FullPageLoader'

const AsyncAdminRoute = React.lazy(() => import('./AdminRouter.async'))

interface AdminRoutesProps {
  path: string
}

export default function AdminRoutes({ path }: AdminRoutesProps) {
  const isAuthenticated = useSelector(getIsAuthenticated)
  const isAdmin = useSelector(getIsAdminUser)

  function onRouteRender() {
    if (!isAuthenticated || !isAdmin) {
      return <Unathorized />
    }

    return (
      <Suspense fallback={<FullPageLoader />}>
        <AsyncAdminRoute />
      </Suspense>
    )
  }

  return <Route path={path} render={onRouteRender} />
}
