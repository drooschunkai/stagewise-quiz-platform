import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '@/store/slices/authSlice'
import type { RootState, AppDispatch } from '@/store'

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { user, loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  )

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return {
    user,
    loading,
    error,
    isAuthenticated,
    isAdmin: user?.role === 'admin',
    isTeacher: user?.role === 'teacher',
    isStudent: user?.role === 'student'
  }
}
