import React, { useState } from 'react'
import { LockIcon, Mail, User2Icon, ArrowRight } from 'lucide-react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

  const query = new URLSearchParams(window.location.search)

  const urlState = query.get('state')

  const dispatch = useDispatch();

  const [state, setState] = useState(urlState || "login")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden'>
      {/* Background Orbs */}
      <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-blob'></div>
      <div className='absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-blob animation-delay-2000'></div>
      <div className='absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-blob animation-delay-4000'></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="backdrop-blur-2xl bg-white/5 p-8 sm:p-10 rounded-4xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
              {state === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base">
              {state === "login" ? "Enter your details to access your workspace" : "Sign up to start building your perfect resume"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {state !== "login" && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User2Icon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LockIcon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {state === "login" && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-2"
            >
              {state === "login" ? "Sign In" : "Sign Up"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              {state === "login" ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                className="ml-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {state === "login" ? "Create one" : "Sign in instead"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login