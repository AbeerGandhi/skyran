import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { properties } from '../../data/properties';

export default function FeaturedProperties() {
  const featured = properties.slice(0, 3);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#3B82F6] font-bold text-xs uppercase tracking-[0.3em] mb-4">Curated Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 uppercase tracking-tight">Featured Projects</h2>
            <p className="text-stone-500 text-lg">
              Explore our hand-picked selection of Dubai's most prestigious off-plan and ready projects
              from world-renowned developers.
            </p>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E293B] text-white font-bold rounded-full hover:bg-slate-800 transition-all group uppercase tracking-widest text-xs"
          >
            All Properties
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
