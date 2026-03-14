import { useState } from 'react';
import { Search, Building, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { developerCategories } from '../data/developers';

export default function Developers() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = developerCategories.map(category => ({
    ...category,
    developers: category.developers.filter(dev =>
      dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.developers.length > 0);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <p className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">Our Partners</p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
            Top Real Estate <br />
            <span className="text-[#3B82F6]">Developers in Dubai</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Direct access to the most prestigious developers in the UAE.
            Official partners for off-plan and ready projects.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-stone-100 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search developers, communities, or projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-[#3B82F6] outline-none transition-all text-stone-800"
            />
          </div>
        </div>
      </div>

      {/* Developers by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 md:space-y-32">
        {filteredCategories.map((category, idx) => (
          <section key={idx} className="space-y-12 md:space-y-16">
            <div className="max-w-4xl border-l-4 border-[#3B82F6] pl-8">
              <p className="text-[#3B82F6] font-bold text-xs uppercase tracking-widest mb-3">Professional Partners</p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight uppercase">{category.title}</h2>
              <p className="text-stone-500 leading-relaxed text-base md:text-xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {category.developers.map((dev) => (
                <Link
                  key={dev.id}
                  to={`/developers/${dev.id}`}
                  className="group block bg-white rounded-[32px] p-8 md:p-10 border border-stone-100 hover:border-[#3B82F6]/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 h-full relative overflow-hidden"
                >
                  <div className="h-24 md:h-28 flex items-center justify-start mb-8 transition-transform duration-500 group-hover:-translate-y-1">
                    <img
                      src={dev.logo}
                      alt={dev.name}
                      className="max-h-full max-w-[180px] md:max-w-[220px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 group-hover:text-[#3B82F6] transition-colors uppercase tracking-tight">
                      {dev.name}
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base line-clamp-3 leading-relaxed mb-8">
                      {dev.description}
                    </p>
                    <div className="flex items-center gap-3 text-[#3B82F6] text-xs font-bold uppercase tracking-widest pt-6 border-t border-stone-50">
                      <span>Explore Projects</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Map Section */}
      <section className="bg-stone-50 py-24 md:py-32 border-t border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-[#3B82F6] font-bold text-xs uppercase tracking-widest mb-4">Direct From Developer</p>
          <h2 className="text-3xl md:text-6xl font-bold text-stone-800 mb-6 uppercase tracking-tight leading-none">Find Properties in <br className="hidden md:block" /> <span className="text-[#3B82F6]">Key Communities</span></h2>
          <p className="text-stone-500 max-w-3xl mx-auto mb-16 text-base md:text-xl leading-relaxed">
            Discover the perfect investment or home across Palm Jumeirah, Downtown, and more.
          </p>

          <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-white bg-white aspect-[21/9] group">
            <img
              src="https://images.unsplash.com/photo-1544984243-ea5b7c1f0b47?w=1600&q=80"
              alt="Dubai Map Placeholder"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-[40px] p-8 md:p-16 shadow-2xl max-w-2xl border border-[#3B82F6]/10 transform transition-all duration-700 group-hover:scale-[1.02]">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-[#3B82F6] mx-auto mb-8 animate-bounce" />
                <h3 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 uppercase tracking-tight">Interactive Map Coming Soon</h3>
                <p className="text-stone-600 mb-10 text-sm md:text-lg leading-relaxed">
                  We are building an interactive guide to help you find off-plan and ready properties directly on the map.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['EMAAR', 'DAMAC', 'NAKHEEL', 'SOBHA', 'ALDAR'].map(name => (
                    <span key={name} className="px-6 py-3 bg-stone-50 rounded-2xl text-[10px] md:text-xs font-bold text-stone-600 tracking-wider border border-stone-100">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-[#1E293B] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6] rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
          <p className="text-[#3B82F6] font-bold text-sm tracking-[0.3em] uppercase mb-8">Direct Access</p>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-10 leading-tight uppercase tracking-tight">Ready to Invest in <br /> <span className="text-[#3B82F6]">Dubai's Future?</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-base md:text-xl leading-relaxed">
            Get official brochures, floor plans, and priority unit selection directly from the developer through our senior consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-[#3B82F6] text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 uppercase tracking-widest text-xs">
              Request Project List
            </Link>
            <a href="tel:+97142725641" className="w-full sm:w-auto px-12 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 uppercase tracking-widest text-xs">
              Call Advisor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
