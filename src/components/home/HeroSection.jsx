import { useState } from 'react';
import { MapPin, Home as House, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="Dubai Luxury Real Estate"
          className="w-full h-full object-cover scale-105"
        />
        {/* Deep Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B] via-[#1E293B]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Skyran Real Estate Dubai</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tighter">
            Discover <br />
            <span className="text-[#3B82F6]">Dubai's Most Exclusive</span> <br />
            Residences
          </h1>

          {/* Description */}
          <p className="text-xl text-stone-300 mb-12 leading-relaxed max-w-xl">
            Official partner to Dubai's top developers. Get direct access to off-market inventory and premier off-plan projects with flexible payment plans.
          </p>

          {/* Search Box */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-6 border border-white/10 shadow-2xl">
            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              {['Buy', 'Off-Plan', 'Ready'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab
                    ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative group">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-[#3B82F6] transition-colors" />
                <select className="w-full pl-14 pr-6 py-5 bg-[#1a1a2e] border border-white/10 rounded-2xl text-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] appearance-none cursor-pointer transition-all">
                  <option value="">Preferred Area</option>
                  <option value="downtown">Downtown Dubai</option>
                  <option value="palm">Palm Jumeirah</option>
                  <option value="marina">Dubai Marina</option>
                  <option value="creek">Dubai Creek Harbour</option>
                </select>
              </div>

              <div className="relative group">
                <House className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-[#3B82F6] transition-colors" />
                <select className="w-full pl-14 pr-6 py-5 bg-[#1a1a2e] border border-white/10 rounded-2xl text-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] appearance-none cursor-pointer transition-all">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>

              <Link
                to="/properties"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#1a1a2e] font-bold rounded-2xl hover:bg-stone-100 transition-all uppercase tracking-widest text-xs"
              >
                <Search className="w-4 h-4" />
                <span>Search Properties</span>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-12 mt-16 py-8 border-t border-white/5">
            {[
              { label: 'Properties Sold', value: '2.5K+', detail: 'Premium Inventory' },
              { label: 'Client Satisfaction', value: '98%', detail: 'Global Investors' },
              { label: 'Project Portfolio', value: '150+', detail: 'Top Developers' }
            ].map((stat, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="h-6 w-[1px] bg-white/10"></div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest">{stat.label}</p>
                  <p className="text-[9px] text-stone-500 uppercase font-medium">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Side Element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-2/3 border-l border-white/5 bg-gradient-to-l from-white/5 to-transparent flex items-center justify-center">
          <div className="text-[200px] font-bold text-white/[0.02] rotate-90 select-none uppercase tracking-tighter">SKYRAN</div>
        </div>
      </div>
    </section>
  );
}
