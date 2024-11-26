import React from 'react';
import { RecommendationCard } from './RecommendationCard';
import { recommendations, Recommendation } from '../data/recommendations';
import { X } from 'lucide-react';

interface RecommendationsListProps {
  category: 'relax' | 'nightlife' | 'family';
  onClose: () => void;
}

export function RecommendationsList({ category, onClose }: RecommendationsListProps) {
  const categoryMap = {
    relax: 'Lugares para relajarse',
    nightlife: 'Vida nocturna',
    family: 'Actividades familiares'
  };

  const filteredRecommendations = recommendations.filter(
    (rec: Recommendation) => rec.category === category
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-2xl max-w-6xl w-full p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{categoryMap[category]}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              {...recommendation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}