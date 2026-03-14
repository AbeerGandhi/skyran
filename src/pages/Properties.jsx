import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, LayoutGrid, List, Check, MapPin, Building2 } from 'lucide-react';
import PropertyCard from '../components/home/PropertyCard';
import { properties } from '../data/properties';

export default function Properties() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filters, setFilters] = useState({
    location: 'All Locations',
    type: 'All Types',
    developer: 'All Developers',
    status: 'All Status',
    beds: 'Any Beds',
    price: 'Any Price'
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Derive options from dynamic data
  const locations = ['All Locations', ...new Set(properties.map(p => p.location.area))];
  const types = ['All Types', ...new Set(properties.map(p => p.type))];
  const developers = ['All Developers', ...new Set(properties.map(p => p.developer))];
  const statuses = ['All Status', 'Ready', 'Off-Plan'];
  const beds = ['Any Beds', 'Studio', '1', '2', '3', '4', '5+'];
  const prices = ['Any Price', 'Under 1M', '1M - 3M', '3M - 5M', 'Above 5M'];

  const handleFilterSelect = (category, value) => {
    setFilters(prev => ({ ...prev, [category]: value }));
    setActiveDropdown(null);
  };

  const filteredProperties = properties.filter(property => {
    // Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const match = property.title.toLowerCase().includes(query) ||
        property.location.area.toLowerCase().includes(query) ||
        property.developer.toLowerCase().includes(query);
      if (!match) return false;
    }

    // Dropdown Filters
    if (filters.location !== 'All Locations' && property.location.area !== filters.location) return false;
    if (filters.type !== 'All Types' && property.type !== filters.type) return false;
    if (filters.developer !== 'All Developers' && property.developer !== filters.developer) return false;

    if (filters.status !== 'All Status') {
      if (!property.status[0].toLowerCase().includes(filters.status.toLowerCase())) return false;
    }

    if (filters.beds !== 'Any Beds') {
      const bedCount = property.bedrooms;
      if (filters.beds === 'Studio' && bedCount !== 0) return false;
      if (filters.beds === '5+' && bedCount < 5) return false;
      if (['1', '2', '3', '4'].includes(filters.beds) && bedCount !== parseInt(filters.beds)) return false;
    }

    if (filters.price !== 'Any Price') {
      const p = property.price;
      if (filters.price === 'Under 1M' && p >= 1000000) return false;
      if (filters.price === '1M - 3M' && (p < 1000000 || p > 3000000)) return false;
      if (filters.price === '3M - 5M' && (p < 3000000 || p > 5000000)) return false;
      if (filters.price === 'Above 5M' && p <= 5000000) return false;
    }

    return true;
  });

  const FilterDropdown = ({ title, options, activeValue, category }) => (
    <div className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setActiveDropdown(activeDropdown === category ? null : category);
        }}
        className={`flex w-full items-center justify-between whitespace-nowrap rounded-xl border px-4 py-3 text-sm transition-all h-12 uppercase tracking-wider ${activeValue !== title ? 'border-[#3B82F6] text-[#3B82F6] bg-[#3B82F6]/5 font-bold' : 'border-stone-200 text-stone-600 bg-white hover:border-stone-300'
          }`}
      >
        <span className="truncate">{activeValue}</span>
        <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-300 ${activeDropdown === category ? 'rotate-180' : ''}`} />
      </button>

      {activeDropdown === category && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white rounded-2xl shadow-2xl border border-stone-100 z-50 p-2 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto overflow-x-hidden">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleFilterSelect(category, option)}
              className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors ${activeValue === option ? 'bg-[#3B82F6]/10 text-[#3B82F6] font-bold' : 'hover:bg-stone-50 text-stone-700'
                }`}
            >
              <span>{option}</span>
              {activeValue === option && <Check className="h-4 w-4" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB]" onClick={() => setActiveDropdown(null)}>
      {/* Hero Section */}
      <div className="bg-[#1E293B] pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[150px] opacity-10 -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-[#3B82F6] font-bold text-sm tracking-[0.3em] uppercase mb-4">Discover Luxury</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore <br /> <span className="text-[#3B82F6]">Premier Properties</span></h1>
          <p className="text-stone-400 max-w-2xl text-lg mb-0 leading-relaxed">
            From iconic waterfront penthouses to exclusive desert villas,
            discover the finest real estate portfolio in Dubai.
          </p>
        </div>
      </div>

      {/* Filters and Grid Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        {/* Filter Card */}
        <div className="mb-12" ref={dropdownRef}>
          <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-6 md:p-8">
            <div className="relative mb-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border-none rounded-2xl pl-14 pr-6 py-5 text-lg focus:ring-2 focus:ring-[#3B82F6] transition-all outline-none text-stone-800 placeholder:text-stone-400"
                placeholder="Search properties by name, location, or developer..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              <FilterDropdown title="All Locations" options={locations} activeValue={filters.location} category="location" />
              <FilterDropdown title="All Types" options={types} activeValue={filters.type} category="type" />
              <FilterDropdown title="All Developers" options={developers} activeValue={filters.developer} category="developer" />
              <FilterDropdown title="All Status" options={statuses} activeValue={filters.status} category="status" />
              <FilterDropdown title="Any Beds" options={beds} activeValue={filters.beds} category="beds" />
              <FilterDropdown title="Any Price" options={prices} activeValue={filters.price} category="price" />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-[#3B82F6] rounded-full"></div>
            <p className="text-stone-500 text-lg">
              Showing <span className="font-bold text-stone-800">{filteredProperties.length}</span> curated results
            </p>
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-stone-100 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#1E293B] text-white shadow-lg' : 'text-stone-400 hover:text-stone-600'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-[#1E293B] text-white shadow-lg' : 'text-stone-400 hover:text-stone-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[40px] border border-stone-100">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-stone-300" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">No Properties Found</h3>
            <p className="text-stone-500 mb-8 max-w-md mx-auto">We couldn't find any properties matching your current filters. Try adjusting your search or clear all filters.</p>
            <button
              onClick={() => setFilters({
                location: 'All Locations',
                type: 'All Types',
                developer: 'All Developers',
                status: 'All Status',
                beds: 'Any Beds',
                price: 'Any Price'
              })}
              className="px-8 py-3 bg-[#3B82F6] text-white font-bold rounded-full hover:bg-blue-600 transition-all uppercase tracking-widest text-sm"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Bottom Location Section Placeholder */}
        <div className="mt-32 text-center">
          <p className="text-[#3B82F6] font-bold text-xs uppercase tracking-[0.3em] mb-3">Location Guide</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6">Explore Properties by <span className="text-[#3B82F6]">Area</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto mb-16 text-lg">
            Discover Dubai's most sought-after neighborhoods and find your perfect investment opportunity.
          </p>

          <div className="relative rounded-[50px] overflow-hidden shadow-2xl group border-4 border-white bg-white">
            <div className="aspect-[21/9] w-full relative">
              <img
                src="https://images.unsplash.com/photo-1544984243-ea5b7c1f0b47?w=1600&q=80"
                alt="Dubai Map View"
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Map Pin Overlays */}
            <div className="absolute top-[30%] left-[40%] bg-white p-3 rounded-full shadow-2xl animate-bounce">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div className="absolute top-[50%] left-[55%] bg-white p-3 rounded-full shadow-2xl animate-bounce delay-100">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div className="absolute top-[40%] left-[65%] bg-white p-3 rounded-full shadow-2xl animate-bounce delay-300">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div className="absolute top-[60%] left-[45%] bg-white p-3 rounded-full shadow-2xl animate-bounce delay-500">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl border border-[#3B82F6]/10 max-w-xl">
                <h4 className="text-2xl font-bold text-stone-800 mb-4">Interactive Neighborhood Guide</h4>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  From the glistening shores of Palm Jumeirah to the urban heart of Downtown Dubai, explore projects tailored to your lifestyle.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Dubai Marina', 'Business Bay', 'Palm Jumeirah', 'Creek Harbour', 'Downtown'].map(area => (
                    <span key={area} className="px-4 py-2 bg-stone-100 rounded-lg text-xs font-bold text-stone-700 uppercase tracking-wider">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
