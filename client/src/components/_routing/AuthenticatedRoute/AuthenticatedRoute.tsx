import React from 'react'
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom'

interface AuthenticatedRouteProps extends RouteProps {}

export default function AuthenticatedRoute({
  render,
  children,

  ...routeProps
}: AuthenticatedRouteProps) {
  const isAuthenticated = false // TODO: read from store

  function onRouteRender(routeRenderProps: RouteComponentProps) {
    if (isAuthenticated) {
      if (render) {
        return render(routeRenderProps)
      } else {
        return children
      }
    }

    return <Redirect to="/" />
  }

  return <Route {...routeProps} render={onRouteRender} />
}
