import React from 'react';

interface NotFoundStateProps {
  searchTerm: string;
}

const NotFoundState: React.FC<NotFoundStateProps> = ({ searchTerm }) => {
  return (
    <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
      <img 
        src="https://images.pexels.com/photos/7728682/pexels-photo-7728682.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Plant not found" 
        className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Plant Not Found</h3>
      <p className="text-gray-600 mb-4">
        Sorry, we couldn't find information for "<span className="font-medium">{searchTerm}</span>".
      </p>
      <p className="text-gray-600">
        Try searching for another plant or check the spelling of your search term.
      </p>
    </div>
  );
};

export default NotFoundState;