import React from 'react';
import { StepIndicator } from './StepIndicator';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { BusinessDetailsStep } from './steps/BusinessDetailsStep';
import { MarketAnalysisStep } from './steps/MarketAnalysisStep';
import { FinancialStep } from './steps/FinancialStep';
import { TeamStep } from './steps/TeamStep';
import { ReviewStep } from './steps/ReviewStep';
import type { BusinessData } from '../types/business';

interface BusinessPlanWizardProps {
  currentStep: number;
  businessData: BusinessData;
  onDataUpdate: (data: Partial<BusinessData>) => void;
  onStepChange: (step: number) => void;
  onGeneratePlan: () => void;
}

const steps = [
  { title: 'Business Basics', component: BasicInfoStep },
  { title: 'Product & Services', component: BusinessDetailsStep },
  { title: 'Market Research', component: MarketAnalysisStep },
  { title: 'Financial Planning', component: FinancialStep },
  { title: 'Team & Expertise', component: TeamStep },
  { title: 'Generate Plan', component: ReviewStep }
];

export const BusinessPlanWizard: React.FC<BusinessPlanWizardProps> = ({
  currentStep,
  businessData,
  onDataUpdate,
  onStepChange,
  onGeneratePlan
}) => {
  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <div className="p-8">
      <StepIndicator currentStep={currentStep} steps={steps} />
      
      <div className="mt-8">
        <CurrentStepComponent
          businessData={businessData}
          onDataUpdate={onDataUpdate}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onGeneratePlan={onGeneratePlan}
          currentStep={currentStep}
          totalSteps={steps.length}
        />
      </div>
    </div>
  );
};