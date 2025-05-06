import React from 'react';
import { Leaf } from 'lucide-react';
import PlantSearch from './components/PlantSearch';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Leaf className="h-8 w-8 text-green-600 mr-2" />
          <h1 className="text-2xl font-bold text-green-800">PlantPal</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your Plant's Care Guide</h2>
            <p className="text-gray-600">Enter your plant's common name to get watering, light, and soil recommendations</p>
          </div>
          
          <PlantSearch />
        </div>
      </main>
      
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 PlantPal | Your Personal Plant Care Assistant</p>
        </div>
      </footer>
    </div>
  );
}

export default App;