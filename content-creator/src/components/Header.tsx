import React from 'react';
import { PenTool, History, Sparkles, Menu, X, Brain } from 'lucide-react';

interface HeaderProps {
  onViewHistory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onViewHistory }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl shadow-lg">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ContentAI Pro
              </h1>
              <p className="text-sm text-gray-600 font-medium">Smart Content Generation</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <button
                onClick={onViewHistory}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                <History className="w-5 h-5" />
                <span>History</span>
              </button>
              <a href="#templates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Templates</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Support</a>
            </nav>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg font-medium">
              Upgrade Pro
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={onViewHistory}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                <History className="w-5 h-5" />
                <span>History</span>
              </button>
              <a href="#templates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Templates</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Support</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg font-medium w-fit">
                Upgrade Pro
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};