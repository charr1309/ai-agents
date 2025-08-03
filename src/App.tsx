import React, { useState } from 'react';
import { Briefcase, FileText, TrendingUp, Users, DollarSign, Target, Download, ArrowLeft, ArrowRight } from 'lucide-react';
import { BusinessPlanWizard } from './components/BusinessPlanWizard';
import { BusinessPlanPreview } from './components/BusinessPlanPreview';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { BusinessData } from './types/business';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState<BusinessData>({
    businessName: '',
    industry: '',
    businessType: '',
    location: '',
    description: '',
    targetMarket: '',
    products: '',
    competitors: '',
    uniqueValue: '',
    marketSize: '',
    fundingNeeded: '',
    revenue: '',
    expenses: '',
    timeline: '',
    team: '',
    experience: ''
  });
  const [showPreview, setShowPreview] = useState(false);

  const handleDataUpdate = (data: Partial<BusinessData>) => {
    setBusinessData(prev => ({ ...prev, ...data }));
  };

  const handleGeneratePlan = () => {
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BusinessPlanPreview 
          businessData={businessData} 
          onBack={() => setShowPreview(false)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Business Plan Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate professional, comprehensive business plans in minutes using our advanced AI technology
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BusinessPlanWizard
              currentStep={currentStep}
              businessData={businessData}
              onDataUpdate={handleDataUpdate}
              onStepChange={setCurrentStep}
              onGeneratePlan={handleGeneratePlan}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;