import { getRoutePermission } from '@/utils/routePermission'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRoute {
  path: string
  children: ReactNode
  permissions: Object
}
const ProtectedRoute = (props: ProtectedRoute) => {
  const { path, children, permissions } = props
  const routePerm = getRoutePermission(permissions, path)

  if (!routePerm?.access) {
    return <Navigate to="/403" />
  }

  return children
}
