import { useParams, Link } from 'react-router-dom';
import { MapPin, Building, Bed, Square, Check, Phone, Mail, ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid, Calendar, ShieldCheck, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPropertyById, formatPrice, formatSquareFeet } from '../data/properties';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getPropertyById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Property Not Found</h2>
          <Link to="/properties" className="text-[#3B82F6] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/properties" className="group flex items-center gap-2 text-stone-500 hover:text-[#3B82F6] transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Collection
          </Link>
          <div className="h-4 w-[1px] bg-stone-200"></div>
          <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">{property.location.area}</p>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-bold rounded-full uppercase tracking-widest border border-[#3B82F6]/20">
                {property.status[0]}
              </span>
              <span className="px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-stone-200">
                {property.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 uppercase tracking-tighter mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-stone-500 text-lg">
              <MapPin className="w-5 h-5 text-[#3B82F6]" />
              <span>{property.location.area}, {property.location.city}</span>
            </div>
          </div>
          <div className="text-left lg:text-right bg-white p-8 rounded-[32px] shadow-xl border border-stone-100 min-w-[300px]">
            <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Asking Price</p>
            <p className="text-4xl font-bold text-[#3B82F6]">{formatPrice(property.price)}</p>
            <p className="text-stone-400 text-sm mt-2 font-medium">Approx. $ {(property.price / 3.67).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl group">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prevImage} className="p-4 bg-white/90 backdrop-blur-md rounded-full text-stone-800 shadow-xl hover:bg-white transition-all transform hover:scale-110">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="p-4 bg-white/90 backdrop-blur-md rounded-full text-stone-800 shadow-xl hover:bg-white transition-all transform hover:scale-110">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image Counter Badge */}
              <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20">
                {activeImage + 1} / {property.images.length} Photos
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative min-w-[120px] aspect-video rounded-2xl overflow-hidden transition-all duration-300 border-2 ${activeImage === idx ? 'border-[#3B82F6] scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Features Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-stone-100 h-full">
              <h3 className="text-xl font-bold text-stone-800 mb-8 uppercase tracking-widest pb-4 border-b border-stone-50">Property Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl">
                  <div className="flex items-center gap-4 text-stone-500 font-bold uppercase tracking-widest text-[10px]">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Bed className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    Bedrooms
                  </div>
                  <span className="font-bold text-stone-800 text-lg">{property.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl">
                  <div className="flex items-center gap-4 text-stone-500 font-bold uppercase tracking-widest text-[10px]">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Square className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    Square Feet
                  </div>
                  <span className="font-bold text-stone-800 text-lg">{formatSquareFeet(property.squareFeet)}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl">
                  <div className="flex items-center gap-4 text-stone-500 font-bold uppercase tracking-widest text-[10px]">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Building className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    Developer
                  </div>
                  <span className="font-bold text-[#3B82F6] text-sm uppercase tracking-tight">{property.developer}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl">
                  <div className="flex items-center gap-4 text-stone-500 font-bold uppercase tracking-widest text-[10px]">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Calendar className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    Completion
                  </div>
                  <span className="font-bold text-stone-800 text-sm">{property.status[0]}</span>
                </div>
              </div>

              <button className="w-full mt-10 py-5 bg-[#3B82F6] text-white font-bold rounded-2xl transition-all hover:bg-blue-600 shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                Schedule a Private Viewing
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs / Description */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-stone-800 uppercase tracking-tight mb-8 flex items-center gap-3">
                <Info className="w-6 h-6 text-[#3B82F6]" />
                Property Description
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">{property.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-800 uppercase tracking-tight mb-8">Premium Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="w-8 h-8 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <span className="text-sm font-semibold text-stone-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Contact Form Placeholder */}
          <div className="space-y-8">
            <div className="bg-[#1E293B] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Expert Advice</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-8">
                Interested in this property? Contact our area specialist for a consultation and off-market details.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Call Agent</p>
                    <p className="text-sm font-bold">+971 4 272 5641</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Email Team</p>
                    <p className="text-sm font-bold">info@skyran.ae</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 mb-8">
                <div className="flex items-center gap-3 text-[#3B82F6] font-bold text-xs uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Buyer Protection
                </div>
                <p className="text-stone-500 text-[10px] leading-tight">
                  Skyran Real Estate is fully licensed by RERA. We provide direct developer pricing with no hidden commissions on off-plan projects.
                </p>
              </div>

              <button className="w-full py-5 bg-white text-navy-dark font-bold rounded-2xl transition-all hover:bg-stone-50 shadow-xl uppercase tracking-widest text-xs">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
