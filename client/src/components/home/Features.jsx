import React from 'react'
import { Zap, ShieldCheck, BarChart3, Wand2 } from 'lucide-react'

const Features = () => {
    const [activeFeature, setActiveFeature] = React.useState(0);

    const features = [
        {
            icon: <Wand2 className="w-6 h-6 stroke-blue-500" />,
            title: "AI-Powered Writing",
            description: "Let our advanced AI help you craft the perfect bullet points that highlight your achievements and impact.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100"
        },
        {
            icon: <BarChart3 className="w-6 h-6 stroke-indigo-500" />,
            title: "ATS-Optimized Formats",
            description: "Ensure your resume passes through Applicant Tracking Systems with our parsed and validated templates.",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-100"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 stroke-purple-500" />,
            title: "Bank-Grade Privacy",
            description: "Your data is yours. We use end-to-end encryption to ensure your personal information stays secure.",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100"
        }
    ];

    return (
        <div id='features' className='flex flex-col items-center py-24 scroll-mt-12 relative'>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            
            <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-500/10 border border-blue-200/50 rounded-full px-5 py-1.5 mb-8 shadow-sm">
                <Zap width={16} />
                <span className="font-semibold tracking-wide uppercase">Simple Process</span>
            </div>

            <div className="text-center max-w-2xl mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Build your resume with intelligent tools</h2>
                <p className="text-lg text-slate-600">Our streamlined process helps you create a professional, standout resume in minutes using cutting-edge AI features.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl px-6 w-full relative z-10">
                <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-lg aspect-square bg-gradient-to-tr from-slate-100 to-slate-50 rounded-[2.5rem] p-8 shadow-xl border border-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[2.5rem]"></div>
                        <img className="relative w-full h-full object-cover rounded-2xl shadow-lg border border-slate-200/50" src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop" alt="Features Demo" />
                    </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4 w-full max-w-lg">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${activeFeature === index ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 scale-105' : 'bg-transparent border-transparent hover:bg-slate-50'}`}
                            onMouseEnter={() => setActiveFeature(index)}
                        >
                            <div className="flex gap-5">
                                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${feature.bgColor} border ${feature.borderColor}`}>
                                    {feature.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features