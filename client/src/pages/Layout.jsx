import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'

const Layout = () => {

  const { user, loading } = useSelector(state => state.auth)

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      {
        user ? (
          <div className='min-h-screen bg-slate-50/50 selection:bg-blue-100 selection:text-blue-900 font-sans'>
            <Navbar />
            <main className="animate-fade-in">
              <Outlet />
            </main>
          </div>
        ) : <Login />
      }
    </div>
  )
}

export default Layout