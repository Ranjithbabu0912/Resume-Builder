import React from 'react'
import { Heart } from 'lucide-react'

const Testimonial = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025',
            text: 'Radiant made undercutting all of our competitors an absolute breeze. The AI features are mind-blowing.'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025',
            text: 'I landed my dream job within two weeks of using this builder. The templates are so clean and professional.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025',
            text: 'The ATS-friendly designs gave me so much confidence applying to top tech companies.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Sarah Chen',
            handle: '@sarahcodes',
            date: 'May 18, 2025',
            text: 'Easiest resume builder I have ever used. The interface is beautiful and intuitive.'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="bg-white p-6 rounded-[2rem] mx-4 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 w-80 shrink-0 flex flex-col justify-between">
            <div>
                <div className="flex gap-3 mb-4 items-center">
                    <img className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src={card.image} alt={card.name} />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <p className="font-bold text-slate-800">{card.name}</p>
                            <svg className="fill-blue-500 w-4 h-4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{card.handle}</span>
                    </div>
                </div>
                <p className="text-base text-slate-700 leading-relaxed italic">"{card.text}"</p>
            </div>
            <div className="flex items-center justify-between text-slate-400 text-xs mt-6 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                    <span>Read full review</span>
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                    </svg>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <div id='testimonials' className='flex flex-col items-center py-24 scroll-mt-12 bg-slate-50 relative overflow-hidden'>
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex items-center gap-2 text-sm text-purple-700 bg-purple-500/10 border border-purple-200/50 rounded-full px-5 py-1.5 mb-8 shadow-sm">
                <Heart className='w-4 h-4 text-purple-600' />
                <span className="font-semibold tracking-wide uppercase">Loved by users</span>
            </div>

            <div className="text-center max-w-2xl mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Don't just take our word for it</h2>
                <p className="text-lg text-slate-600">Join thousands of professionals who have successfully elevated their careers with our platform.</p>
            </div>

            <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6">
                <div className="absolute left-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
                
                <div className="flex animate-marquee-fast hover:pause">
                    {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`top-${index}`} card={card} />
                    ))}
                </div>

                <div className="flex animate-marquee-slow hover:pause">
                    {[...cardsData, ...cardsData, ...cardsData].reverse().map((card, index) => (
                        <CreateCard key={`bottom-${index}`} card={card} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
            </div>
        </div>
    )
}

export default Testimonial

