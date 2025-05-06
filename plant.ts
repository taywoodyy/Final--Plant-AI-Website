export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  description?: string;
  watering: string;
  light: string;
  soil: string;
  type: 'flower' | 'houseplant';
}