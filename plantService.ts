import { Plant } from '../types/plant';
import { plantDatabase } from '../data/plantDatabase';

// Simulates an API call to fetch plant data
export const fetchPlantData = (plantName: string): Promise<Plant | null> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const normalizedSearch = plantName.toLowerCase().trim();
      
      // Find plant by name (case insensitive)
      const plant = plantDatabase.find(
        p => p.name.toLowerCase() === normalizedSearch ||
             p.name.toLowerCase().includes(normalizedSearch) ||
             (p.scientificName && p.scientificName.toLowerCase().includes(normalizedSearch))
      );
      
      resolve(plant || null);
    }, 800); // Simulate network delay
  });
};