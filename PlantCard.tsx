import React from 'react';
import { Droplets, Sun, Voicemail as Soil } from 'lucide-react';
import { Plant } from '../types/plant';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden plant-card">
      <div className={`px-6 py-4 ${plant.type === 'flower' ? 'bg-pink-600' : 'bg-green-600'}`}>
        <h3 className="text-xl font-bold text-white capitalize">{plant.name}</h3>
        {plant.scientificName && (
          <p className="text-pink-100 italic text-sm">{plant.scientificName}</p>
        )}
      </div>
      
      <div className="p-6">
        {plant.description && (
          <p className="text-gray-700 mb-6">{plant.description}</p>
        )}
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-50 rounded-full p-3 mr-4">
              <Droplets className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Watering</h4>
              <p className="text-gray-700">{plant.watering}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-yellow-50 rounded-full p-3 mr-4">
              <Sun className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Light</h4>
              <p className="text-gray-700">{plant.light}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-brown-50 rounded-full p-3 mr-4">
              <Soil className="h-6 w-6 text-brown-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Soil</h4>
              <p className="text-gray-700">{plant.soil}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;