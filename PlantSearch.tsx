import React, { useState } from 'react';
import { Search, Home } from 'lucide-react';
import { fetchPlantData } from '../services/plantService';
import { Plant } from '../types/plant';
import PlantCard from './PlantCard';
import LoadingState from './LoadingState';
import NotFoundState from './NotFoundState';

const PlantSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setNotFound(false);
    setPlant(null);
    setHasSearched(true);
    
    try {
      const data = await fetchPlantData(searchTerm);
      
      if (data) {
        setPlant(data);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching plant data:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setPlant(null);
    setNotFound(false);
    setHasSearched(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for plants or flowers (e.g., rose, peace lily)"
            className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
            {hasSearched && (
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            )}
            <button 
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4 fade-in">
        {loading && <LoadingState />}
        
        {!loading && notFound && <NotFoundState searchTerm={searchTerm} />}
        
        {!loading && plant && <PlantCard plant={plant} />}
        
        {!loading && !notFound && !plant && hasSearched && (
          <div className="text-center p-8 text-gray-500">
            Something went wrong. Please try again.
          </div>
        )}
        
        {!hasSearched && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Popular Plants & Flowers to Search:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Rose', 'Tulip', 'Sunflower', 'Peace Lily', 'Orchid', 'Lavender'].map((name) => (
                <button
                  key={name}
                  onClick={() => {
                    setSearchTerm(name);
                    setTimeout(() => handleSearch(new Event('submit') as unknown as React.FormEvent), 100);
                  }}
                  className="bg-green-50 hover:bg-green-100 text-green-800 py-2 px-3 rounded-md text-sm transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantSearch;