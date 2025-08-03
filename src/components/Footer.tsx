import React from 'react';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">AI BizPlan Pro</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transform your business ideas into professional, investor-ready business plans with our advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@aibizplanpro.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">AI Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Business Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Financial Projections</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Export Options</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Business Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Video Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 AI BizPlan Pro. All rights reserved. Empowering entrepreneurs worldwide.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};