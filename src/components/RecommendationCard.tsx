import React, { useState } from 'react';
import { Star, MapPin, Image as ImageIcon, Navigation } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface RecommendationCardProps {
  title: string;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  location: string;
  price: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function RecommendationCard({ 
  title, 
  description, 
  image,
  gallery, 
  rating, 
  location,
  price,
  coordinates 
}: RecommendationCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`, '_blank');
  };

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <button
            onClick={() => setShowGallery(true)}
            className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{rating}</span>
            </div>
            <span className="text-blue-600 font-semibold">{price}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
            <button
              onClick={handleMapClick}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <Navigation className="w-4 h-4 mr-1" />
              <span className="text-sm">Ver en mapa</span>
            </button>
          </div>
        </div>
      </div>
      {showGallery && (
        <ImageGallery
          images={gallery}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}