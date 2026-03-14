import { Link } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';
import { developers } from '../../data/developers';

export default function DevelopersSection() {
  const featuredDevelopers = developers.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#3B82F6] rounded-full blur-[100px] md:blur-[150px] opacity-[0.03] -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">Trusted Relations</p>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 md:mb-6 uppercase tracking-tight">Premier Developers</h2>
            <p className="text-stone-500 text-base md:text-lg">
              We are official partners with Dubai's most prestigious real estate developers,
              ensuring our clients get priority access and direct pricing.
            </p>
          </div>
          <Link
            to="/developers"
            className="inline-flex items-center gap-2 text-[#3B82F6] font-bold hover:text-blue-700 transition-colors group uppercase tracking-widest text-[10px] md:text-xs"
          >
            Explore All Developers
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredDevelopers.map((dev) => (
            <Link
              key={dev.id}
              to={`/developers/${dev.id}`}
              className="bg-stone-50 rounded-2xl md:rounded-3xl p-4 md:p-8 flex items-center justify-center aspect-square hover:bg-white hover:shadow-2xl hover:shadow-[#3B82F6]/10 border border-stone-50 hover:border-[#3B82F6]/30 transition-all duration-500 group"
            >
              <img
                src={dev.logo}
                alt={dev.name}
                className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity p-2"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-6 md:p-10 bg-[#1E293B] rounded-[30px] md:rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#3B82F6] rounded-full blur-[80px] md:blur-[100px] opacity-10 -ml-24 md:-ml-32 -mt-24 md:-mt-32"></div>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 relative z-10 text-center md:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#3B82F6] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
              <Building2 className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">Need direct developer pricing?</h4>
              <p className="text-stone-400 text-sm md:text-base">Contact our senior advisors for official off-plan inventory.</p>
            </div>
          </div>
          <Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-[#3B82F6] text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-[#3B82F6]/20 uppercase tracking-widest text-[10px] md:text-xs relative z-10 text-center">
            Inquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
