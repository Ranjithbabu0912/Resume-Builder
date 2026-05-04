import React from 'react'
import { Sparkles } from 'lucide-react'

const Banner = () => {
    return (
        <div className="w-full py-3 text-sm text-slate-100 text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 shadow-md flex items-center justify-center gap-3 animate-gradient-x">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-blue-600 bg-white shadow-sm">
                <Sparkles size={14} className="text-blue-600" />
                NEW
            </span>
            <span className="font-medium tracking-wide">AI-Powered Resume Generation is now live!</span>
        </div>
    )
}

export default Banner