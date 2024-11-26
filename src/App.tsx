import React, { useState } from 'react';
import { MapPin, Search, Compass, Map, Star, Utensils, Building } from 'lucide-react';
import { RecommendationsList } from './components/RecommendationsList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecommender, setShowRecommender] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'relax' | 'nightlife' | 'family' | 'culture' | 'gastronomy' | null>(null);

  const activities = [
    { id: 1, name: 'Relajarse', description: 'Playas y spas', category: 'relax' as const, icon: <Compass className="w-5 h-5" /> },
    { id: 2, name: 'Salir de noche', description: 'Vida nocturna y bares', category: 'nightlife' as const, icon: <Star className="w-5 h-5" /> },
    { id: 3, name: 'En familia', description: 'Actividades familiares', category: 'family' as const, icon: <Map className="w-5 h-5" /> },
    { id: 4, name: 'Cultura', description: 'Museos y sitios históricos', category: 'culture' as const, icon: <Building className="w-5 h-5" /> },
    { id: 5, name: 'Gastronomía', description: 'Restaurantes y cocina local', category: 'gastronomy' as const, icon: <Utensils className="w-5 h-5" /> }
  ];

  const handleActivitySelect = (category: 'relax' | 'nightlife' | 'family' | 'culture' | 'gastronomy') => {
    setSelectedCategory(category);
    setShowRecommender(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <MapPin className="w-6 h-6" />
            <span className="text-xl font-semibold">Cartagena AI Guide</span>
          </div>
          <div className="relative flex-1 max-w-2xl mx-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busca tu próximo destino..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?auto=format&fit=crop&q=80"
            alt="Cartagena"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Descubre tu próxima aventura perfecta en Cartagena
            </h1>
            <p className="text-xl mb-8">
              Dinos qué te apasiona y te ayudaremos a encontrar el destino ideal para tus próximas vacaciones
            </p>
            <button
              onClick={() => setShowRecommender(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Comenzar mi aventura
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Compass className="w-8 h-8 text-blue-400" />}
            title="Personalizado para ti"
            description="Recomendaciones basadas en tus preferencias únicas"
          />
          <FeatureCard
            icon={<Map className="w-8 h-8 text-blue-400" />}
            title="Destinos únicos"
            description="Descubre lugares increíbles en Cartagena"
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-blue-400" />}
            title="Experiencias reales"
            description="Basado en reseñas de viajeros reales"
          />
        </div>
      </div>

      {/* AI Recommender Modal */}
      {showRecommender && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold mb-6">¿Qué tipo de experiencia buscas?</h2>
            <div className="grid gap-4">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => handleActivitySelect(activity.category)}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-500">
                      {activity.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{activity.name}</h3>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                  <MapPin className="w-5 h-5 text-blue-500" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowRecommender(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Recommendations List */}
      {selectedCategory && (
        <RecommendationsList
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;