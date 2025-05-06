import React from 'react';
import { Leaf } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="text-center py-16">
      <Leaf className="h-16 w-16 text-green-500 mx-auto mb-4 loading-leaf" />
      <p className="text-lg text-gray-600">Loading plant information...</p>
    </div>
  );
};

export default LoadingState;