import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div id='cta' className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 p-8 md:p-16 flex flex-col items-center text-center shadow-2xl">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Ready to level up your career?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Build a Professional Resume That Helps You Stand Out and Get Hired. Join thousands of professionals landing their dream jobs.
                    </p>
                    <button onClick={()=> navigate('/app')} className="group flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold text-lg px-8 py-4 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] mx-auto">
                        <span>Get Started for Free</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction