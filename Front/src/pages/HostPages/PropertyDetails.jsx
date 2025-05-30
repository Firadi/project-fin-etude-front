import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import ProgressBar from '../../components/ProgressBar';

export default function PropertyDetails() {
  const navigate = useNavigate();
  const { propertyData, updatePropertyData } = useProperty();
  const [details, setDetails] = useState({
    capacity: propertyData.capacity || 1,
    nombreOfChambres: propertyData.nombreOfChambres || 1
  });

  const handleIncrement = (field) => {
    const maxValues = {
      capacity: 10,
      nombreOfChambres: 5,
    };
    
    setDetails(prev => ({
      ...prev,
      [field]: Math.min(prev[field] + 1, maxValues[field])
    }));
  };

  const handleDecrement = (field) => {
    setDetails(prev => ({
      ...prev,
      [field]: Math.max(prev[field] - 1, 1)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePropertyData({
      capacity: details.capacity,
      nombreOfChambres: details.nombreOfChambres
    });
    navigate('/Step-2');
  };

  const isValid = details.capacity > 0 && details.nombreOfChambres > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-black">
            <img src="/logo.png" alt="Holi Square" className="h-14" />
          </Link>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-32">
        <div className="max-w-3xl mx-auto px-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-[32px] font-medium text-gray-900">
                Donnez les informations principales<br />
                concernant votre logement
              </h1>
              <p className="mt-4 text-gray-500">
                Vous pourrez ajouter d'autres informations plus tard, comme les équipements disponibles.
              </p>
            </div>

            <div className="space-y-8 mt-8">
              {/* Capacity */}
              <div className="flex items-center justify-between py-6 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Voyageurs</h2>
                  <p className="text-gray-500 text-sm mt-1">Capacité d'accueil</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement('capacity')}
                    className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ${
                      details.capacity === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-gray-900'
                    }`}
                    disabled={details.capacity === 1}
                  >
                    <span className="sr-only">Réduire</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeWidth="2" d="M4 8h8" />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-lg">{details.capacity}</span>
                  <button
                    onClick={() => handleIncrement('capacity')}
                    className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ${
                      details.capacity === 10 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-gray-900'
                    }`}
                    disabled={details.capacity === 10}
                  >
                    <span className="sr-only">Augmenter</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeWidth="2" d="M8 4v8M4 8h8" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bedrooms */}
              <div className="flex items-center justify-between py-6 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Chambres</h2>
                  <p className="text-gray-500 text-sm mt-1">Nombre de chambres</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement('nombreOfChambres')}
                    className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ${
                      details.nombreOfChambres === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-gray-900'
                    }`}
                    disabled={details.nombreOfChambres === 1}
                  >
                    <span className="sr-only">Réduire</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeWidth="2" d="M4 8h8" />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-lg">{details.nombreOfChambres}</span>
                  <button
                    onClick={() => handleIncrement('nombreOfChambres')}
                    className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ${
                      details.nombreOfChambres === 5 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-gray-900'
                    }`}
                    disabled={details.nombreOfChambres === 5}
                  >
                    <span className="sr-only">Augmenter</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeWidth="2" d="M8 4v8M4 8h8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Progress */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.03)]">
        <ProgressBar />
        <div className="max-w-7xl mx-auto px-12">
          <div className="h-20 flex items-center justify-between">
            <Link
              to="/Structure"
              className="text-gray-900 font-medium hover:underline"
            >
              Retour
            </Link>
            <button
              onClick={handleSubmit}
              className={`h-12 px-8 rounded-xl font-medium transition-colors ${
                isValid 
                  ? 'bg-orange-600 text-white hover:bg-orange-700' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!isValid}
            >
              Suivant
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
} 