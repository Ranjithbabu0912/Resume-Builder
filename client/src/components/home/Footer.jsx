import React from 'react'

const Footer = () => {
    return (
        <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-slate-900">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[200px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
                        <a href="/" className="flex items-center gap-2">
                            {/* <img src="/logo.svg" alt="Logo" className="h-10 w-auto brightness-0 invert" /> */}
                            <span className="font-bold text-2xl text-white tracking-tight">Namma Resume ! </span>
                        </a>
                        <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
                            Empowering professionals to build standout resumes with intelligent AI assistance and ATS-optimized designs.
                        </p>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-6">Product</p>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-6">Resources</p>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Career Advice</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">Careers <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-blue-500/30">HIRING</span></a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-6">Legal</p>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
                    <p className="text-slate-500 text-sm">
                        © 2026 Namma Resume ! by Ranjith Babu. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer