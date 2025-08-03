import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BusinessData } from '../../types/business';

interface BasicInfoStepProps {
  businessData: BusinessData;
  onDataUpdate: (data: Partial<BusinessData>) => void;
  onNext: () => void;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  businessData,
  onDataUpdate,
  onNext
}) => {
  const handleInputChange = (field: keyof BusinessData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    onDataUpdate({ [field]: e.target.value });
  };

  const isValid = businessData.businessName && businessData.industry && businessData.businessType;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Fundamentals</h2>
        <p className="text-gray-600">Tell us about the core details of your business venture</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name *
          </label>
          <input
            type="text"
            value={businessData.businessName}
            onChange={handleInputChange('businessName')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            value={businessData.industry}
            onChange={handleInputChange('industry')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select an industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="retail">Retail</option>
            <option value="food-beverage">Food & Beverage</option>
            <option value="education">Education</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="services">Professional Services</option>
            <option value="real-estate">Real Estate</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type *
          </label>
          <select
            value={businessData.businessType}
            onChange={handleInputChange('businessType')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select business type</option>
            <option value="startup">Startup</option>
            <option value="small-business">Small Business</option>
            <option value="franchise">Franchise</option>
            <option value="online-business">Online Business</option>
            <option value="brick-mortar">Brick & Mortar</option>
            <option value="consulting">Consulting</option>
            <option value="saas">SaaS</option>
            <option value="ecommerce">E-commerce</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={businessData.location}
            onChange={handleInputChange('location')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="City, State, Country"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Description
        </label>
        <textarea
          value={businessData.description}
          onChange={handleInputChange('description')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Provide a brief description of your business concept and what it does"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isValid
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};