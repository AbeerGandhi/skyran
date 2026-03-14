import { MapPin, Building, Bed, Square, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice, formatSquareFeet } from '../../data/properties';

export default function PropertyCard({ property }) {
  return (
    <div
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <div className="bg-[#10B981] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
            {property.status[0]}
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider border border-white/20">
            {property.bedrooms > 0 ? `${property.bedrooms} BEDROOM` : 'STUDIO'}
          </div>
        </div>

        {/* Price Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">Starting From</p>
          <p className="text-2xl font-bold text-white">{formatPrice(property.price)}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-stone-800 mb-2 truncate group-hover:text-[#3B82F6] transition-colors">
          {property.title}
        </h3>

        {/* Developer */}
        <div className="flex items-center gap-2 mb-3 text-stone-500 text-xs font-semibold uppercase tracking-wider">
          <Building className="w-3.5 h-3.5" />
          <span>{property.developer}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6 text-stone-500 text-sm">
          <MapPin className="w-4 h-4 text-[#3B82F6]" />
          <span>{property.location.area}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-6 mb-8 py-4 border-t border-stone-50">
          <div className="flex items-center gap-2 text-stone-600">
            <Bed className="w-4 h-4 text-stone-400" />
            <span className="text-sm font-bold">{property.bedrooms} BR</span>
          </div>
          <div className="flex items-center gap-2 text-stone-600">
            <Square className="w-4 h-4 text-stone-400" />
            <span className="text-sm font-bold">{formatSquareFeet(property.squareFeet)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white border border-stone-200 text-stone-800 text-xs font-bold rounded-full hover:bg-stone-50 transition-colors uppercase tracking-wider"
          >
            View Details
          </Link>
          <button
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#3B82F6] text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-colors uppercase tracking-wider shadow-md"
          >
            Enquire Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
