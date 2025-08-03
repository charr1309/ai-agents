import React from 'react';
import { Check, Circle } from 'lucide-react';

interface Step {
  title: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-12 px-4">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg ${
                  index < currentStep
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-200'
                    : index === currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200 scale-110'
                    : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-6 h-6" />
                ) : index === currentStep ? (
                  <Circle className="w-6 h-6 fill-current" />
                ) : (
                  <span className="text-lg">{index + 1}</span>
                )}
              </div>
              <span className={`mt-3 text-sm font-semibold text-center max-w-20 leading-tight ${
                index < currentStep 
                  ? 'text-green-700' 
                  : index === currentStep 
                  ? 'text-blue-700' 
                  : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-2 mx-6 rounded-full transition-all duration-500 ${
                  index < currentStep 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white rounded-full px-4 py-2 shadow-lg border">
            <span className="text-sm font-semibold text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border">
          <div className="flex items-center space-x-4 mb-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200'
              }`}
            >
              {currentStep < steps.length ? (
                <Circle className="w-6 h-6 fill-current" />
              ) : (
                <Check className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {steps[currentStep]?.title || 'Complete'}
              </h3>
              <p className="text-sm text-gray-600">
                Current step in your business plan
              </p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Step List */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-xs px-2 py-1 rounded-full text-center ${
                  index < currentStep
                    ? 'bg-green-100 text-green-700'
                    : index === currentStep
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {index + 1}. {step.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg ${
                index < currentStep
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-200'
                  : index === currentStep
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200 scale-110'
                  : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-6 h-6" />
              ) : index === currentStep ? (
                <Circle className="w-6 h-6 fill-current" />
              ) : (
                <span className="text-lg">{index + 1}</span>
              )}
            </div>
            <span className={`mt-3 text-sm font-semibold text-center max-w-20 leading-tight ${
              index < currentStep 
                ? 'text-green-700' 
                : index === currentStep 
                ? 'text-blue-700' 
                : 'text-gray-500'
            }`}>
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-2 mx-6 rounded-full transition-all duration-500 ${
                index < currentStep 
                  ? 'bg-gradient-to-r from-green-500 to-green-600' 
                  : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};