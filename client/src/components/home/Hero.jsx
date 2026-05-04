import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Hero = () => {

    const { user } = useSelector(state => state.auth);
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className="relative min-h-screen pb-20 overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
            <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[50%] w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>

            {/* Navbar */}
            <nav className="relative z-50 flex items-center justify-between w-full py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                <Link to="/" className="group flex items-center gap-2.5">
                    {/* <img src="/logo.svg" alt="Logo" className='h-10 w-auto group-hover:scale-105 transition-transform duration-300' /> */}
                    <span className="font-bold text-2xl tracking-tight group-hover:scale-105 transition-transform duration-300 bg-linear-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-700 text-transparent bg-clip-text">Namma Resume ! </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-slate-200/50 shadow-sm transition duration-500 text-slate-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                    <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
                    <a href="#cta" className="hover:text-blue-600 transition-colors">Contact</a>
                </div>

                <div className="flex gap-3">
                    <Link to="/app?state=register" className="hidden md:flex px-7 py-2.5 bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all rounded-full text-white font-medium" hidden={user}>
                        Get Started
                    </Link>
                    <Link to="/app?state=login" className="hidden md:flex px-7 py-2.5 bg-white border border-slate-200 shadow-sm active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 font-medium" hidden={user}>
                        Login
                    </Link>
                    <Link to='/app' className='hidden md:flex px-8 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all rounded-full text-white font-medium' hidden={!user}>
                        Dashboard
                    </Link>
                </div>

                <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 active:scale-95 transition-colors text-slate-700" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                        <path d="M4 5h16M4 12h16M4 19h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center text-xl gap-8 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} >
                <a href="#" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors font-medium">Home</a>
                <a href="#features" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors font-medium">Features</a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors font-medium">Testimonials</a>
                <a href="#cta" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors font-medium">Contact</a>
                <div className="flex flex-col gap-4 mt-4 w-64">
                    <Link to="/app?state=register" onClick={() => setMenuOpen(false)} className="px-8 py-3 bg-blue-600 text-white rounded-full text-center font-medium" hidden={user}>Get Started</Link>
                    <Link to="/app?state=login" onClick={() => setMenuOpen(false)} className="px-8 py-3 border border-slate-700 text-white rounded-full text-center font-medium" hidden={user}>Login</Link>
                    <Link to='/app' onClick={() => setMenuOpen(false)} className='px-8 py-3 bg-blue-600 text-white rounded-full text-center font-medium' hidden={!user}>Dashboard</Link>
                </div>
                <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 text-slate-900">
                {/* Social Proof Badge */}
                {/* <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/60 shadow-sm mb-8 animate-fade-in">
                    <div className="flex -space-x-3">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user" className="size-8 object-cover rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user" className="size-8 object-cover rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user" className="size-8 object-cover rounded-full border-2 border-white" />
                        <div className="size-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {Array(5).fill(0).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-amber-400" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-slate-700">Trusted by 10k+ professionals</p>
                    </div>
                </div> */}

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-6xl text-center leading-[1.1] md:leading-[1.15] tracking-tight animate-fade-in px-2">
                    Unga Career-ku Perfect <br className="hidden md:block" />
                    <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
                        AI-Powered
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 md:-bottom-2 left-0 text-blue-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
                    </span> Resume.
                </h1>

                <p className="max-w-2xl text-center text-base md:text-xl text-slate-600 mt-8 mb-10 animate-fade-in px-4">
                    Create, edit and download professional resumes in minutes with intelligent AI-powered assistance. Stand out from the crowd and land your dream job.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in w-full sm:w-auto px-6">
                    <Link to='/app' className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-4 text-base md:text-lg font-medium flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300">
                        Build Your Resume Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 rounded-full px-8 py-4 text-base md:text-lg font-medium text-slate-700 shadow-sm hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero