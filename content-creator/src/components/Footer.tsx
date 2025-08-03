import React from 'react';
import { Brain, Mail, Globe, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">ContentAI Pro</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Revolutionize your content creation with AI-powered tools designed for modern businesses and creators.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@contentaipro.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Content Types</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Blog Posts & Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Social Media Content</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Email Campaigns</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Marketing Copy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">AI Content Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Brand Voice Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Content Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Live Chat Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Creator Community</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 ContentAI Pro. All rights reserved. Empowering creators worldwide.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Users className="w-4 h-4" />
              <span>10,000+ Happy Creators</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>50+ Languages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};