import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@/store'
import { useSelector } from 'react-redux'
import BeatLoaderComponent from '@/ui/BeatLoaderComponent'

export default function GuestRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (isAuthenticated === true) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="px-4 w-full">
      {isAuthenticated === null ? <BeatLoaderComponent /> : <Outlet />}
    </div>
  )
}
