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
    <div className="flex items-center justify-between mb-12 px-4">
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