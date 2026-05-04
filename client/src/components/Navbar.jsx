import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice';

const Navbar = () => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutUser = () => {
        navigate('/')
        dispatch(logout())
    }

    return (
        <div className='sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]'>
            <nav className='flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 transition-all'>
                <Link to="/" className="group flex items-center gap-2.5">
                    {/* <img src="/logo.svg" alt="Logo" className='h-9 w-auto group-hover:scale-105 transition-transform duration-300' /> */}
                    <span className="font-bold text-2xl tracking-tight group-hover:scale-105 transition-transform duration-300 bg-linear-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-700 text-transparent bg-clip-text">Namma Resume ! </span>
                </Link>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-3'>
                        <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-blue-700 font-semibold shadow-inner border border-blue-200/50">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                        <p className='max-sm:hidden font-medium text-slate-700 text-sm'>Hi, {user?.name}</p>
                    </div>
                    <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 px-5 py-2 rounded-full text-sm font-medium active:scale-95 transition-all duration-200 shadow-sm hover:shadow'>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar