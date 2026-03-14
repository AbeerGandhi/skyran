import { useParams, Link } from 'react-router-dom';
import { Building2, MapPin, Globe, ExternalLink, ArrowLeft, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PropertyCard from '../components/home/PropertyCard';
import { getDeveloperById } from '../data/developers';
import { properties } from '../data/properties';

export default function DeveloperDetail() {
  const { id } = useParams();
  const developer = getDeveloperById(id);

  if (!developer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Developer Not Found</h2>
          <Link to="/developers" className="text-[#3B82F6] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Developers
          </Link>
        </div>
      </div>
    );
  }

  const developerProperties = properties.filter(p => p.developer.toLowerCase() === developer.name.toLowerCase());

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Header / Hero */}
      <div className="bg-[#1E293B] pt-32 pb-60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[150px] opacity-10 -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/developers" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-12 group uppercase tracking-widest text-xs font-bold">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Partners
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-stone-100 flex items-center justify-center min-w-[240px] aspect-video">
                <img
                  src={developer.logo}
                  alt={developer.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-[10px] font-bold rounded-full uppercase tracking-widest">Official Partner</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/40"></div>)}
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{developer.name}</h1>
                <p className="text-stone-400 text-lg leading-relaxed">{developer.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center min-w-[140px]">
                <p className="text-[#3B82F6] text-3xl font-bold mb-1">{developerProperties.length}</p>
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Active Projects</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center min-w-[140px]">
                <p className="text-[#3B82F6] text-3xl font-bold mb-1">100%</p>
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Direct Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 pb-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* About & Stats */}
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-stone-200/50 border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3 uppercase tracking-tight">
                <Building2 className="w-6 h-6 text-[#3B82F6]" />
                About Developer
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-10">
                {developer.name} is a global leader in property development, renowned for creating iconic landmarks that redefine luxury living. With a commitment to exceptional quality and innovative design, they continue to shape the future of Dubai's urban landscape.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "RERA Regulated", desc: "Fully licensed and regulated developer" },
                  { icon: Clock, title: "15+ Years", desc: "Consistent track record of delivery" },
                  { icon: CheckCircle2, title: "Direct Inventory", desc: "Access to official payment plans" },
                  { icon: Globe, title: "Global Presence", desc: "Award-winning international projects" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-stone-50 bg-stone-50/50">
                    <item.icon className="w-6 h-6 text-[#3B82F6] shrink-0" />
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm whitespace-nowrap">{item.title}</h4>
                      <p className="text-xs text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Properties List */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-stone-800 uppercase tracking-tight">Current Portfolio</h2>
                  <p className="text-stone-500 mt-2">Discover active projects and ready residences by {developer.name}</p>
                </div>
                <div className="h-0.5 flex-grow mx-8 bg-stone-100 hidden md:block"></div>
              </div>

              {developerProperties.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {developerProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[40px] p-20 text-center border-2 border-dashed border-stone-200">
                  <p className="text-stone-400 text-lg font-medium">No active listings currently available for this developer.</p>
                  <Link to="/properties" className="inline-block mt-4 text-[#3B82F6] font-bold uppercase tracking-widest text-xs hover:underline">Browse All Properties</Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#1E293B] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#3B82F6] rounded-full blur-[80px] opacity-20 -mr-16 -mb-16"></div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Direct Inquiry</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-8">
                Get official brochures, floor plans, and direct developer payment plans for any {developer.name} project.
              </p>

              <div className="space-y-4 mb-10">
                <a href="tel:+97142725641" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Call Office</p>
                    <p className="text-sm font-bold">+971 4 272 5641</p>
                  </div>
                </a>
                <a href="mailto:info@skyran.ae" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Email Team</p>
                    <p className="text-sm font-bold">info@skyran.ae</p>
                  </div>
                </a>
              </div>

              <button className="w-full py-5 bg-white text-[#1a1a2e] font-bold rounded-2xl transition-all hover:bg-stone-50 shadow-xl uppercase tracking-widest text-xs">
                Request Project List
              </button>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-xl shadow-stone-200/50">
              <h4 className="text-lg font-bold text-stone-800 mb-6 uppercase tracking-tight">Quick Links</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl group">
                  <span className="text-sm font-bold text-stone-600 group-hover:text-[#3B82F6] transition-colors">Official Website</span>
                  <ExternalLink className="w-4 h-4 text-stone-300" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl group">
                  <span className="text-sm font-bold text-stone-600 group-hover:text-[#3B82F6] transition-colors">Investment Guide</span>
                  <Globe className="w-4 h-4 text-stone-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
